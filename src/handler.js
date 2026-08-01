const config = require("./config");
const commands = require("./commands");

function getBody(msg) {
  const m = msg.message;
  if (!m) return "";
  if (m.conversation) return m.conversation;
  if (m.extendedTextMessage?.text) return m.extendedTextMessage.text;
  if (m.imageMessage?.caption) return m.imageMessage.caption;
  if (m.videoMessage?.caption) return m.videoMessage.caption;
  return "";
}

async function handleMessage(sock, msg) {
  try {
    const from = msg.key.remoteJid;
    const isGroup = from.endsWith("@g.us");
    const sender = isGroup ? msg.key.participant : from;
    const body = getBody(msg);
    const isOwner = sender?.replace(/[^0-9]/g, "").includes(config.OWNER_NUMBER.replace(/[^0-9]/g, ""));

    if (config.MODE === "self" && !isOwner) return;
    if (!body.startsWith(config.PREFIX)) return;

    const args = body.slice(config.PREFIX.length).trim().split(/\s+/);
    const cmd = args.shift().toLowerCase();

    const command = commands[cmd];
    if (!command) return;

    await command({ sock, msg, from, sender, args, isOwner, isGroup, body });
  } catch (e) {
    console.error("[HANDLER] Erreur:", e.message);
  }
}

module.exports = { handleMessage };