# 🚀 Ritesh Pandey — Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com)

A full-stack personal portfolio with a **React + Vite** frontend, **Node.js + Express** backend, real-time visitor tracking, and a contact form — all backed by **MongoDB Atlas**.

---

## ✨ Features

- 🎨 Dark UI with 3D WebGL background (OGL)
- 📊 Real-time visitor tracking — browser, OS, device, pages visited
- 💬 Contact form with spam filtering, rate limiting & validation
- 🔍 `Ctrl+K` smart search across all pages
- 📈 Live GitHub repo count via SWR
- 🤖 Full SEO — sitemap, OG tags, JSON-LD, PWA manifest
- 🔐 Admin API key protected endpoints

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `server/.env`:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://ritesh@2005:<db_password>@cluster0.ljuqgci.mongodb.net/portfolio
FRONTEND_URL=http://localhost:5173
ADMIN_API_KEY=your_strong_random_secret_here
```

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
```

Create `client/.env`:

```
VITE_GITHUB_USERNAME=riteshpandey9450
VITE_API_URL=http://localhost:5000
VITE_TRACKER_API_URL=http://localhost:5000/api/v1
```

```bash
npm run dev
```

---

## 🖼️ Profile Image

Place your profile photo at:
```
client/src/assets/profile/profile.jpg
```

---

## 🚀 Deployment (Vercel)

Deploy **server first**, then client.

**Server** — Root: `server`, Build: `npm install`

**Client** — Root: `client`, Framework: Vite, Build: `npm run build`

Client env vars for production:
```
VITE_GITHUB_USERNAME=riteshpandey9450
VITE_API_URL=https://your-server.vercel.app
VITE_TRACKER_API_URL=https://your-server.vercel.app/api/v1
```

---

Built with ❤️ by Ritesh Pandey
