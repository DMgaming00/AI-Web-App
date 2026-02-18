# AI Productivity Agent

A full-stack AI-powered productivity agent that breaks down your goals into actionable tasks, categorized and prioritized for you. Built with React, Node.js, and Google Gemini 2.5 Flash.

## 🚀 Features

- **Goal Analysis**: Intelligently analyzes user goals.
- **Task Breakdown**: Generates 3-5 actionable steps.
- **Smart Categorization**: Tags tasks (Work, Study, Health, Personal, etc.).
- **Priority Assignment**: Color-coded priorities (High, Medium, Low).
- **Modern UI**: Clean, responsive interface with smooth animations.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), CSS3, Lucide React (Icons), Framer Motion (Animations)
- **Backend**: Node.js, Express
- **AI**: Google Gemini 2.5 Flash (via Generative AI SDK)

## 📂 Project Structure

```
ai-productivity-agent/
├── backend/          # Node.js + Express Server
│   ├── server.js     # API Endpoints & Gemini Integration
│   └── .env          # Environment Variables
├── frontend/         # React Application
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskCard.jsx
│   │   ├── api.js    # API Service
│   │   ├── App.jsx   # Main Application Logic
│   │   └── index.css # Global Styles
│   └── package.json
└── README.md
```

## ⚡ Setup Instructions

### Prerequisites
- Node.js installed
- Google Gemini API Key (Get one at [aistudio.google.com](https://aistudio.google.com/))

### 1. Backend Setup

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables:
    - Open `.env` file.
    - Replace `YOUR_API_KEY_HERE` with your actual Gemini API Key.

4.  Start the server:
    ```bash
    node server.js
    ```
    Server will run on `http://localhost:3000`.

### 2. Frontend Setup

1.  Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser.

## 🌐 Deployment Instructions

### Option 1: Render (Recommended for easiest full-stack deployment)

1.  **Backend**:
    - Create a new **Web Service** on Render.
    - Connect your GitHub repo.
    - Set *Root Directory* to `backend`.
    - Set *Build Command* to `npm install`.
    - Set *Start Command* to `node server.js`.
    - Add Environment Variable `GEMINI_API_KEY`.

2.  **Frontend**:
    - Create a new **Static Site** on Render.
    - Connect your GitHub repo.
    - Set *Root Directory* to `frontend`.
    - Set *Build Command* to `npm run build`.
    - Set *Publish Directory* to `dist`.
    - **Important**: You need to update the `baseURL` in `frontend/src/api.js` to point to your deployed backend URL instead of `localhost:3000`.

### Option 2: Firebase (Frontend only) + Render/Heroku (Backend)

1.  Deploy Backend to Render or Heroku as above.
2.  Deploy Frontend to Firebase Hosting:
    - Install Firebase CLI: `npm install -g firebase-tools`
    - Run `firebase login` and `firebase init` in `frontend` folder.
    - Run `npm run build`.
    - Run `firebase deploy`.

## 📝 License

ISC
