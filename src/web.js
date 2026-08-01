const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const store = require("./store");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Page principale
app.get("/", (req, res) => {
  const code = store.getPairingCode();
  res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${config.BOT_NAME}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0a0a0f;color:#e0e0e0;font-family:'Segoe UI',sans-serif;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px}
    .card{background:#111827;border:1px solid #1f2937;border-radius:16px;padding:40px 30px;max-width:480px;width:100%;text-align:center;box-shadow:0 0 40px rgba(34,211,238,0.08)}
    h1{font-size:1.6rem;color:#22d3ee;margin-bottom:8px}
    .sub{color:#6b7280;margin-bottom:30px;font-size:.9rem}
    .code-box{background:#0f172a;border:2px solid #22d3ee;border-radius:12px;padding:20px;margin:20px 0;font-size:2rem;font-weight:700;letter-spacing:8px;color:#22d3ee;font-family:monospace}
    .steps{text-align:left;background:#0f172a;border-radius:10px;padding:16px;margin-top:16px;font-size:.85rem;line-height:2}
    .steps li{list-style:none;padding:2px 0}
    .steps li::before{content:"→ ";color:#22d3ee}
    .badge{display:inline-block;background:#064e3b;color:#34d399;padding:4px 12px;border-radius:20px;font-size:.75rem;margin-bottom:20px}
    .waiting{color:#fbbf24;font-size:.9rem;margin-top:10px;animation:blink 1.2s infinite}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
    footer{margin-top:30px;color:#374151;font-size:.75rem}
  </style>
</head>
<body>
  <div class="card">
    <h1>🤖 ${config.BOT_NAME}</h1>
    <p class="sub">by ${config.DEV_NAME}</p>
    <span class="badge">✅ Serveur actif</span>
    ${code
      ? `<p style="color:#e5e7eb;margin-bottom:10px">Ton code de couplage :</p>
         <div class="code-box">${code}</div>
         <ul class="steps">
           <li>Ouvre WhatsApp sur ton téléphone</li>
           <li>Menu ⋮ → Appareils liés</li>
           <li>Lier un appareil</li>
           <li>Saisir le numéro de téléphone</li>
           <li>Entre le code ci-dessus</li>
         </ul>`
      : `<p class="waiting">⏳ En attente du code de couplage...<br/>Lance le bot sur Termux / serveur</p>`
    }
    <footer>NATSUTECH'S PROJECT — Prefix: <strong>${config.PREFIX}</strong></footer>
  </div>
</body>
</html>`);
});

// API status
app.get("/status", (req, res) => {
  res.json({ status: "online", bot: config.BOT_NAME, code: store.getPairingCode() });
});

function startWebServer() {
  app.listen(config.PORT, () => {
    console.log(`\x1b[36m[WEB] Serveur sur http://localhost:${config.PORT}\x1b[0m`);
  });
}

module.exports = { startWebServer };