#!/bin/bash

# Script to fix Vercel token (remove spaces/validate)

echo "🔧 Fixing Vercel Token"
echo ""
echo "The current token appears to contain spaces, which is invalid."
echo ""
echo "Please get your actual Vercel token:"
echo ""
echo "1. Go to: https://vercel.com/account/tokens"
echo "2. If you don't have one, click 'Create Token'"
echo "3. Name it: 'GitHub Actions'"
echo "4. Copy the token (it should be a long string like: vercel_xxxxx...)"
echo "5. The token should NOT contain any spaces"
echo ""
read -p "Paste your Vercel token here: " TOKEN

# Remove any spaces from the token
TOKEN=$(echo "$TOKEN" | tr -d ' ')

if [ -z "$TOKEN" ]; then
    echo "❌ No token provided"
    exit 1
fi

# Validate token format (should start with vercel_ or similar)
if [[ ! "$TOKEN" =~ ^[a-zA-Z0-9_\-]+$ ]]; then
    echo "⚠️  Warning: Token format looks unusual"
    read -p "Continue anyway? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        exit 1
    fi
fi

REPO="mikias1219/modernpersonalwebsite"

echo ""
echo "🔐 Setting VERCEL_TOKEN secret (without spaces)..."
gh secret set VERCEL_TOKEN -R "$REPO" --body "$TOKEN"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ VERCEL_TOKEN updated successfully!"
    echo ""
    echo "🎉 Token fixed! The next deployment should work."
    echo "   Trigger a new deployment by pushing a commit."
else
    echo "❌ Failed to update token"
    exit 1
fi

