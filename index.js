require("dotenv").config();
const { startBot } = require("./src/bot");
const { startWebServer } = require("./src/web");

console.log(`
\x1b[36m
╔══════════════════════════════════════╗
║    NATSUTECH'S PROJECT - WhatsApp Bot  ║
║         by NatsuTech's 🇨🇬             ║
║         Version 1.0.0               ║
╚══════════════════════════════════════╝
\x1b[0m`);

startWebServer();
startBot();