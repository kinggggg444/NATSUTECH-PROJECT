#!/data/data/com.termux/files/usr/bin/bash

# ══════════════════════════════════════════════════════════════
#   NATSUTECH PROJECT — Script d'installation Termux
#   by NatsuTech's 🇨🇬
# ══════════════════════════════════════════════════════════════

RED="\e[31m"; GREEN="\e[32m"; YELLOW="\e[33m"; CYAN="\e[36m"; RESET="\e[0m"

echo -e "${CYAN}
╔══════════════════════════════════════╗
║    NATSUTECH'S PROJECT — Installer    ║
║         by NatsuTech's 🇨🇬            ║
╚══════════════════════════════════════╝
${RESET}"

# 1. Mise à jour des paquets
echo -e "${YELLOW}[1/5] Mise à jour des paquets...${RESET}"
pkg update -y && pkg upgrade -y

# 2. Installation des dépendances système
echo -e "${YELLOW}[2/5] Installation de git, node, python, ffmpeg...${RESET}"
pkg install -y git nodejs python ffmpeg make

# 3. Clonage du repo
echo -e "${YELLOW}[3/5] Clonage du bot...${RESET}"
if [ -d "NATSUTECH-PROJECT" ]; then
  echo -e "${YELLOW}Dossier existant, mise à jour...${RESET}"
  cd NATSUTECH-PROJECT && git pull
else
  git clone https://github.com/kinggggg444/NATSUTECH-PROJECT
  cd NATSUTECH-PROJECT
fi

# 4. Installation des modules Node.js
echo -e "${YELLOW}[4/5] Installation des modules npm...${RESET}"
npm install

# 5. Configuration .env
if [ ! -f ".env" ]; then
  echo -e "${YELLOW}[5/5] Configuration...${RESET}"
  cp .env.example .env
  echo -e "${CYAN}Entre ton numéro WhatsApp (avec indicatif, ex: 242053323191) :${RESET}"
  read -r OWNER_NUM
  sed -i "s/242XXXXXXXXX/$OWNER_NUM/" .env
  echo -e "${GREEN}✅ Configuration sauvegardée !${RESET}"
fi

echo -e "${GREEN}
╔══════════════════════════════════════╗
║   ✅ Installation terminée !         ║
║                                      ║
║   Lance le bot avec :                ║
║   npm start                          ║
║                                      ║
║   Le code de couplage s'affichera   ║
║   dans le terminal dans 3 secondes.  ║
╚══════════════════════════════════════╝
${RESET}"

echo -e "${CYAN}Veux-tu lancer le bot maintenant ? (o/n)${RESET}"
read -r LAUNCH
if [ "$LAUNCH" = "o" ]; then
  npm start
fi