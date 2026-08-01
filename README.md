# 🤖 NATSUTECH'S PROJECT

<p align="center">
  <img src="https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Termux-Compatible-orange?style=for-the-badge&logo=linux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Author-NatsuTech's%20🇨🇬-blue?style=for-the-badge"/>
</p>

> **Bot WhatsApp multi-session** avec connexion par **code à 8 caractères** (lettres + chiffres), 100+ commandes, compatible Termux et serveur.

---

## ⚡ Installation rapide sur Termux

### Méthode 1 — Script automatique (recommandée)

Copie et colle cette seule commande dans Termux :

```bash
pkg update -y && pkg install -y git nodejs && git clone https://github.com/kinggggg444/NATSUTECH-PROJECT && cd NATSUTECH-PROJECT && bash install.sh
```

Le script fait tout automatiquement :
- ✅ Mise à jour de Termux
- ✅ Installation de Node.js, git, ffmpeg
- ✅ Clonage du repo
- ✅ Installation des modules
- ✅ Configuration de ton numéro

---

### Méthode 2 — Installation manuelle

**Étape 1 — Mettre à jour Termux**
```bash
pkg update -y && pkg upgrade -y
```

**Étape 2 — Installer les dépendances**
```bash
pkg install -y git nodejs python ffmpeg make
```

**Étape 3 — Cloner le repo**
```bash
git clone https://github.com/kinggggg444/NATSUTECH-PROJECT
cd NATSUTECH-PROJECT
```

**Étape 4 — Installer les modules Node.js**
```bash
npm install
```

**Étape 5 — Configurer**
```bash
cp .env.example .env
nano .env
```
Remplace `242XXXXXXXXX` par ton numéro WhatsApp avec indicatif.

**Étape 6 — Lancer le bot**
```bash
npm start
```

---

## 🔗 Connexion WhatsApp (Code 8 caractères)

Quand tu lances le bot, un **code de couplage** s'affiche dans le terminal :

```
╔══════════════════════════════╗
║   CODE DE COUPLAGE WHATSAPP  ║
║                              ║
║       ABCD-1234              ║
║                              ║
║  WhatsApp → Appareils liés   ║
║  → Lier avec n° de tél.      ║
╚══════════════════════════════╝
```

**Comment l'utiliser :**
1. Ouvre **WhatsApp** sur ton téléphone
2. Appuie sur ⋮ (menu) → **Appareils liés**
3. **Lier un appareil**
4. **Saisir le numéro de téléphone** (en bas)
5. Entre le code affiché dans le terminal
6. ✅ Le bot est connecté !

---

## 📋 Commandes disponibles (100+)

| Catégorie | Commandes |
|---|---|
| 📋 **Général** | `.menu` `.info` `.ping` `.temps` |
| 🎉 **Fun** | `.blague` `.conseil` `.citation` `.fait` `.defi` `.verite` |
| 🎮 **Jeux** | `.pile` `.des` `.8ball` |
| 🔢 **Utilitaires** | `.calc` `.inverser` `.majuscule` `.minuscule` `.count` `.base64` |
| 👥 **Groupes** | `.tagall` `.kick` `.promote` `.demote` `.desc` `.fermer` `.ouvrir` |
| 👑 **Owner** | `.bc` `.mode` |

---

## ⚙️ Variables d'environnement

| Variable | Description | Défaut |
|---|---|---|
| `BOT_NAME` | Nom du bot | `NATSUTECH PROJECT` |
| `DEV_NAME` | Nom du développeur | `NatsuTech's` |
| `PREFIX` | Préfixe des commandes | `.` |
| `MODE` | `public` ou `self` | `public` |
| `OWNER_NUMBER` | Ton numéro WhatsApp | — |
| `PORT` | Port du serveur web | `3000` |

---

## 📞 Contact

- 👨‍💻 **Développeur** : NatsuTech's 🇨🇬
- 🐙 **GitHub** : [kinggggg444](https://github.com/kinggggg444)

---

<p align="center">Made with ❤️ by <b>NatsuTech's 🇨🇬</b></p>