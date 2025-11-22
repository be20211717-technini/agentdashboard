# agentdashboard记得 chmod +x deploy.sh。
README.md
# Multi-Agent Dashboard (V1)

A minimal React + Vite dashboard for your multi-agent orchestrator.
Designed for quick deploy to Zeabur.

## Local dev
1. npm install
2. npm run dev
Open http://localhost:5173

## Build & preview
- npm run build
- npm run preview

## Zeabur deploy
- Add `ZEABUR_TOKEN` to GitHub Secrets
- Push to main -> .github workflow will deploy
- Or run `./deploy.sh` locally (interactive or using ZEABUR_TOKEN)

## Add assets
Place company docs in `public/assets/` for static access.
