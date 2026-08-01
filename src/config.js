require("dotenv").config();
module.exports = {
  BOT_NAME:        process.env.BOT_NAME        || "NATSUTECH PROJECT",
  DEV_NAME:        process.env.DEV_NAME        || "NatsuTech's 🇨🇬",
  PREFIX:          process.env.PREFIX          || ".",
  MODE:            process.env.MODE            || "public",
  OWNER_NUMBER:    process.env.OWNER_NUMBER    || "242000000000",
  MAX_SESSIONS:    parseInt(process.env.MAX_SESSIONS) || 10,
  PORT:            parseInt(process.env.PORT)  || 3000,
  SESSION_PATH:    "./session",
  TIMEZONE:        "Africa/Brazzaville",
  FOOTER:          "🤖 NATSUTECH PROJECT | by NatsuTech's 🇨🇬",
};