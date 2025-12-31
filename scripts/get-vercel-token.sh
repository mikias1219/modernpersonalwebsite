#!/bin/bash

# Quick script to get Vercel token and set it as GitHub secret

echo "🔑 Getting Vercel Token for GitHub Actions"
echo ""
echo "Please follow these steps:"
echo ""
echo "1. Open: https://vercel.com/account/tokens"
echo "2. Click 'Create Token'"
echo "3. Name it: 'GitHub Actions'"
echo "4. Copy the token"
echo ""
read -p "Paste your Vercel token here: " TOKEN

if [ -z "$TOKEN" ]; then
    echo "❌ No token provided"
    exit 1
fi

REPO="mikias1219/modernpersonalwebsite"

echo ""
echo "🔐 Setting VERCEL_TOKEN secret..."
gh secret set VERCEL_TOKEN -R "$REPO" --body "$TOKEN"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ VERCEL_TOKEN set successfully!"
    echo ""
    echo "🎉 All secrets are now configured!"
    echo "   Push to GitHub and your site will auto-deploy!"
else
    echo "❌ Failed to set token"
    exit 1
fi

