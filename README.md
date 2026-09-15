# 🌱 EcoStream AI

EcoStream AI is a sustainability-focused prototype that transforms environmental data into understandable climate insights and awareness campaigns.

## Project goals
- Present sample environmental indicators
- Explain climate conditions in simple language
- Generate awareness-campaign drafts
- Demonstrate an agentic AI + RAG architecture
- Provide a foundation for IBM Granite integration

## Current status
This repository is a **starter prototype** using sample data and a mock AI response by default. IBM watsonx.ai / Granite integration is provided as an optional service template and requires your own credentials.

## Main features
- Climate dashboard
- Sample AQI, PM2.5, temperature, humidity, waste and carbon indicators
- Campaign generator
- RAG knowledge-base template
- Agent workflow templates
- Flask API
- React frontend

## Run the backend
```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
# source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

The backend runs at `http://localhost:5000`.

## Run the frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend runs at the Vite URL shown in the terminal.

## Optional IBM Granite setup
Copy `.env.example` to `.env` inside `backend/` and configure:
- `IBM_WATSONX_URL`
- `IBM_PROJECT_ID`
- `IBM_API_KEY`
- `IBM_MODEL_ID`

The IBM watsonx.ai API requires account-specific credentials and an access token. Do not commit secrets.

## SDGs
- SDG 11: Sustainable Cities and Communities
- SDG 13: Climate Action

## Disclaimer
The included environmental values are illustrative sample data, not live measurements. The prototype must be connected to verified data sources before real-world deployment.
