# 🌿 Botanix — Discord Bot

Botanix is a powerful, modular and scalable Discord bot built using **Discord.js v14**, **Node.js**, and **MongoDB**.  
The project follows a clean architecture with handlers, utilities, events and command loaders to make development fast and organized.

---

## ✨ Features

- ⚡ Fast and optimized command handler (Prefix + Slash)
- 🛡️ Anti-system:
  - Anti-link  
  - Anti-invite  
  - Anti-spam  
  - Anti-raid  
- 🗂️ Modular structure with handlers for:
  - Commands  
  - Events  
  - Interactions  
- 🧩 Utils folder (embeds, permissions, formatters, etc.)
- 🗃️ MongoDB integration with clean schemas
- 📄 Full documentation (Security, Contributing, Changelog)
- 📦 Ready for deploy (Railway, Docker, VPS)

---

## 📁 Project Structure

```

src
├── commands
│   ├── prefix
│   └── slash
├── events
├── handlers
│   ├── commands
│   ├── events
│   └── interactions
├── schemas
├── utils
│   ├── embeds.js
│   ├── permissions.js
│   └── ...
└── index.js

```

This structure ensures organization, modularity and easy scalability.

---

## 🔧 Installation

### 1. Clone the repository

```

git clone [https://github.com/Doyyimmii/Botanix](https://github.com/Doyyimmii/Botanix)
cd Botanix

```

### 2. Install dependencies

```

npm install

```

### 3. Configure your environment file

Create a `.env` using the example:

```

cp .env.example .env

````

Fill the variables with your bot data.

---

## 🔑 Environment Variables (`.env`)

```env
TOKEN=your_discord_token
MONGO_URI=your_mongodb_url

# Bot Settings
CLIENT_ID=your_client_id
GUILD_ID=your_guild_id
LOG_CHANNEL_ID=your_log_channel

# Developer mode
OWNER_ID=your_id
````

⚠ **Never commit your real `.env` or tokens.**

---

## 🚀 Running the Bot

### Development mode:

```
node .
```

### With nodemon:

```
npm install -g nodemon
nodemon .
```

---

## 🧪 Slash Command Deployment

Run the deploy script:

```
node src/deploy.js
```

---

## 🗄️ Database

Botanix uses **MongoDB**.

You can host your DB on:

* MongoDB Atlas
* Railway
* Local MongoDB

Ensure `MONGO_URI` is valid.

---

## 📦 Deploy Options

### 🚀 Deploy on Railway

1. Create a Railway project
2. Link your GitHub repository
3. Add all `.env` variables
4. Deploy automatically

### 🐳 Deploy with Docker

```
docker build -t botanix .
docker run -d --name botanix --env-file .env botanix
```

### 💻 Deploy on VPS

* Install Node.js LTS
* Install PM2: `npm i -g pm2`
* Start the bot: `pm2 start index.js`
* Enable restart on reboot: `pm2 startup`

---

## 🛡️ Security

Read: **[SECURITY.md](SECURITY.md)**
Includes:

* Vulnerability reporting
* Token safety
* Secure environment usage

---

## 🤝 Contributions

We welcome contributions!

Read: **[CONTRIBUTING.md](CONTRIBUTING.md)**

---

## 📜 Code of Conduct

By participating, you agree to follow:

📘 **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)**

---

## 📝 Changelog

Track all versions:

📄 **[CHANGELOG.md](CHANGELOG.md)**

---

## 🧾 License

This project is under the **LIicense**.
Feel free to use and modify Botanix as you wish.

---

## ⭐ Support the Project

If you like Botanix:

* ⭐ Star the repository
* 🐛 Report issues
* 🔧 Submit PRs

---

## 👤 Author

* **Doyyimmii**
  GitHub: [https://github.com/Doyyimmii](https://github.com/Doyyimmii)
