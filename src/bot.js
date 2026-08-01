const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const pino = require("pino");
const fs = require("fs-extra");
const path = require("path");
const config = require("./config");
const { handleMessage } = require("./handler");

const SESSION_DIR = path.resolve(config.SESSION_PATH);

async function startBot() {
  await fs.ensureDir(SESSION_DIR);
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["NATSUTECH PROJECT", "Chrome", "1.0.0"],
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 60000,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    syncFullHistory: false,
  });

  // ── Pairing code (si pas encore connecté) ────────────────────────
  if (!sock.authState.creds.registered) {
    const number = config.OWNER_NUMBER.replace(/[^0-9]/g, "");
    setTimeout(async () => {
      try {
        const code = await sock.requestPairingCode(number);
        const formatted = code.match(/.{1,4}/g).join("-");
        console.log("\x1b[33m");
        console.log("╔══════════════════════════════╗");
        console.log("║   CODE DE COUPLAGE WHATSAPP  ║");
        console.log("║                              ║");
        console.log(`║       ${formatted}       ║`);
        console.log("║                              ║");
        console.log("║  WhatsApp → Appareils liés  ║");
        console.log("║  → Lier avec n° de tél.     ║");
        console.log("╚══════════════════════════════╝");
        console.log("\x1b[0m");
        // Expose le code via le module store pour le serveur web
        require("./store").setPairingCode(formatted);
      } catch (e) {
        console.error("Erreur code couplage:", e.message);
      }
    }, 3000);
  }

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error instanceof Boom &&
        lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut;
      console.log("\x1b[31m[BOT] Déconnecté.\x1b[0m", shouldReconnect ? "Reconnexion..." : "Déconnexion définitive.");
      if (shouldReconnect) setTimeout(startBot, 5000);
    } else if (connection === "open") {
      require("./store").setPairingCode(null);
      console.log("\x1b[32m[BOT] ✅ Connecté à WhatsApp !\x1b[0m");
    }
  });

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;
    for (const msg of messages) {
      if (!msg.message) continue;
      await handleMessage(sock, msg);
    }
  });

  return sock;
}

module.exports = { startBot };