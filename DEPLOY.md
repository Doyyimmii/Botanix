# 🌐 Deployment Guide — Botanix

This document explains how to deploy the Botanix Discord bot across multiple hosting platforms, without sharding requirements.  
Botanix runs using a single entry point:

```

node index.js

```

---

# ☁️ 1. Deploying on Shard Cloud (Shard.host)

Shard Cloud is a hosting platform optimized for Discord bots.  
It supports Node.js natively and keeps your bot online 24/7.

## 🔧 Steps to Deploy

1. Create an account at **https://shard.host/**
2. Create a **Node.js container**
3. Upload your project or link your GitHub repo
4. Go to **Environment Variables** and add:

```

BOT_TOKEN=your_bot_token
PREFIX=!
GUILD_ID=your_server_id
LOG_CHANNEL_ID=your_log_channel_id

```

5. Set the **Startup Command** to:

```

node index.js

```

6. Start the container  
7. View logs under **Console**

## 🔁 Updating the Bot

Push updates to GitHub → click **Redeploy/Reinstall** on Shard Cloud  
or manually:

```

git pull
npm install
node index.js

```

## ⚠️ Common Problems

| Problem | Fix |
|---------|------|
| Bot closes instantly | Token invalid or intents disabled |
| Missing modules | Run `npm install` |
| No logs | Restart container |

---

# 🚂 2. Deploying on Railway

Railway is a very stable bot hosting platform with free and paid tiers.

## Steps:

1. Go to **https://railway.app/**
2. Create a project → **Deploy from GitHub**
3. Add environment variables
4. Railway auto-installs packages
5. Start the service

## Railway Start Command

```

node index.js

````

Railway keeps your bot online even when Discord sends no events.

---

# 🐳 3. Deploying with Docker

Docker allows you to host the bot anywhere (VPS, local server, Render, Fly.io, etc.).

## Dockerfile

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]
````

## Build Image

```
docker build -t botanix .
```

## Run Container

```
docker run -d --env-file .env botanix
```

---

# 🔄 4. Hosting on Replit

Replit is easy to use but may sleep on the free plan.

## Steps:

1. Create a new Repl → Node.js
2. Upload your files or sync GitHub
3. Create a `.env` with your variables
4. Create a `.replit` file:

```ini
run = "npm start"
```

5. Start the bot

> Optional: Paid plan required for 24/7 uptime.

---

# 🖥️ 5. VPS / Dedicated Server Deployment

You can host Botanix on any VPS (Oracle, Contabo, DigitalOcean, OVH, AWS, etc.)

### Requirements:

* Node.js installed
* Git installed

## Commands

```bash
git clone https://github.com/your-user/Botanix
cd Botanix
npm install
nano .env
node index.js
```

### Keeping the bot online 24/7:

Install PM2:

```
npm install -g pm2
pm2 start index.js --name botanix
pm2 save
pm2 startup
```

---

# 💻 6. GitHub Codespaces (Development Hosting)

Works for testing or temp hosting.

1. Open your repo in GitHub
2. Click **Code → Codespaces → Create Codespace**
3. Terminal:

```bash
npm install
node index.js
```

Codespaces stays open while the browser tab is active.

---

# 🔑 Required Environment Variables

Ensure your host has:

```
BOT_TOKEN=
PREFIX=
GUILD_ID=
LOG_CHANNEL_ID=
```

Never commit real tokens to GitHub.

---

# 🛡️ Security Notes

* Always store your token using environment variables
* Never expose `.env` publicly
* Disable unused Discord intents
* Use least-privilege permissions when inviting the bot

---

# 🌟 Finished!

Botanix is ready to run on any modern hosting platform.
If you need a **one-click deploy button (Railway / Docker / Render)**, I can generate it too.
