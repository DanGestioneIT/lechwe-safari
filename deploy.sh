#!/bin/bash
# deploy.sh — Lechwe Safari update script
# Uso: ./deploy.sh "Descrizione della modifica"

if [ -z "$1" ]; then
  echo "Errore: specifica un messaggio di commit"
  echo "Uso: ./deploy.sh \"Descrizione della modifica\""
  exit 1
fi

echo "🏷  Aggiorno build-id nel footer..."
BUILD_ID=$(date +%Y%m%d.%H%M)
sed -i '' "s/const BUILD = '[^']*';/const BUILD = '$BUILD_ID';/" js/components.js
echo "   Ver.$BUILD_ID"

echo "📦 Aggiunta file..."
git add .

echo "💾 Commit: $1"
git commit -m "$1"

echo "🚀 Push su GitHub..."
git push origin main

echo "✅ Fatto! Il sito si aggiorna in 30-60 secondi."
GITHUB_USER=$(gh api user --jq .login 2>/dev/null)
if [ ! -z "$GITHUB_USER" ]; then
  PAGE_URL=$(gh api repos/$GITHUB_USER/lechwe-safari/pages --jq '.html_url' 2>/dev/null)
  echo "🌐 $PAGE_URL"
fi
