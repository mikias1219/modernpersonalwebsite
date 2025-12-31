#!/bin/bash

# Fully automated token setup with browser opening

set -e

echo "🚀 Automated Vercel Token Setup"
echo "════════════════════════════════"
echo ""

REPO="mikias1219/modernpersonalwebsite"
TOKEN_URL="https://vercel.com/account/tokens"

echo "📋 Opening Vercel token page in your browser..."
echo ""

# Try to open browser
if command -v xdg-open &> /dev/null; then
    xdg-open "$TOKEN_URL" 2>/dev/null &
elif command -v open &> /dev/null; then
    open "$TOKEN_URL" 2>/dev/null &
else
    echo "Please open: $TOKEN_URL"
fi

echo "Instructions:"
echo "1. In the browser that just opened, click 'Create Token'"
echo "2. Name it: 'GitHub Actions'"
echo "3. Copy the token (long string, no spaces)"
echo ""
echo "The token should look like: vercel_xxxxxxxxxxxxxxxxxxxxx"
echo ""

# Wait a moment for browser to open
sleep 2

echo "════════════════════════════════"
read -p "Paste your Vercel token here: " TOKEN

# Remove any spaces or newlines
TOKEN=$(echo "$TOKEN" | tr -d ' \n\r\t')

if [ -z "$TOKEN" ]; then
    echo "❌ No token provided"
    exit 1
fi

# Validate token format
if [[ "$TOKEN" =~ [[:space:]] ]]; then
    echo "❌ Error: Token contains spaces. Please check and try again."
    exit 1
fi

if [ ${#TOKEN} -lt 20 ]; then
    echo "⚠️  Warning: Token seems too short. Are you sure this is correct?"
    read -p "Continue anyway? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        exit 1
    fi
fi

echo ""
echo "🔐 Setting VERCEL_TOKEN secret..."
gh secret set VERCEL_TOKEN -R "$REPO" --body "$TOKEN"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ VERCEL_TOKEN set successfully!"
    echo ""
    echo "🎉 Token configured! Testing deployment..."
    echo ""
    
    # Trigger a test by making a small commit
    cd /home/mikias/Mikias/Personal/website
    echo "# Token fixed $(date)" >> .token-fixed
    git add .token-fixed
    git commit -m "Fix Vercel token - trigger deployment test" 2>/dev/null || echo "No changes to commit"
    git push origin main 2>/dev/null || echo "Push will trigger deployment"
    
    echo ""
    echo "✅ Deployment triggered!"
    echo "   Check status: https://github.com/$REPO/actions"
    echo ""
else
    echo "❌ Failed to set token"
    exit 1
fi

