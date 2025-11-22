#!/usr/bin/env bash
set -e
# Interactive if no token, non-interactive if ZEABUR_TOKEN present
if [[ -z "$ZEABUR_TOKEN" ]]; then
  echo "No ZEABUR_TOKEN found; running interactive deploy..."
  npx zeabur@latest auth login
  npx zeabur@latest deploy
else
  echo "Using ZEABUR_TOKEN for non-interactive deploy..."
  npx zeabur@latest auth login --token "$ZEABUR_TOKEN"
  npx zeabur@latest deploy --yes
fi
