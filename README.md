# Lead Capture + Webhook Integration

A full-stack Lead Capture Dashboard built using the MERN stack.  
This application allows users to create leads, view them in a structured table, and trigger automation via webhook integration.

---

## Project Overview

This project demonstrates:

- Responsive UI development with React
- Form validation and state handling
- REST API development with Express
- MongoDB integration using Mongoose
- Webhook trigger simulation for automation workflows
- Clean project architecture (client + server separation)

---

## 🔗 GitHub Repository

Repository URL:  
https://github.com/thangamari27/leadgo

---

# 🛠 Tech Stack

## Frontend
- React 18
- Vite
- Tailwind CSS
- React Hook Form
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator
- CORS
- Dotenv

---

# 📁 Project Structure

```
Lead_capture_webapp/
│
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   │   ├── form/
│   │   │   ├── leads/
│   │   │   ├── notfound/
│   │   │   ├── section/
│   │   │   └── ui/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   │   ├── constant/
│   │   │   └── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/                 # Node.js + Express Backend
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── route/
│   │   ├── service/
│   │   └── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 📌 Prerequisites

Make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

---

# Frontend Setup

### Navigate to client folder

```bash
cd client
```

### Install dependencies

```bash
npm install
```

### Create `.env` file inside `/client`

```env
VITE_API_URL=http://localhost:5000/api
```

### Start frontend

```bash
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

# Backend Setup

### 1️⃣ Navigate to server folder

```bash
cd server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file inside `/server`

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 4️⃣ Start backend server

```bash
npm run dev
```

Server will run on:
```
http://localhost:5000
```

---

# API Documentation

### Base URL

```
http://localhost:5000/api/leads
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /        | Create new lead |
| GET    | /        | Get all leads |
| GET    | /:id     | Get single lead |

---

# Features

- Create Lead with validation
- View all leads in table format
- View detailed lead information (Modal / Page)
- Responsive design (Mobile + Desktop)
- Loading states
- Success / Error notifications
- Webhook trigger integration (automation simulation)

---

# 👤 Author

**THANGAMARI**

GitHub:  
https://github.com/thangamari27  

LinkedIn:  
https://www.linkedin.com/in/thanga-mari-03334126b/

Email:  
thangamari616@gmail.com  

---

# Thank You