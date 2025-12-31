#!/bin/bash

# CI/CD Setup Script
# This script helps set up GitHub secrets for automatic deployment

set -e

echo "🚀 Setting up CI/CD for automatic deployment..."
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get repository name
REPO=$(git remote get-url origin 2>/dev/null | sed -E 's/.*github.com[:/]([^/]+\/[^/]+)(\.git)?$/\1/')
if [ -z "$REPO" ]; then
    echo "❌ Could not determine repository name"
    exit 1
fi

echo "📦 Repository: $REPO"
echo ""

# Get Vercel project info
if [ -f ".vercel/project.json" ]; then
    PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*"' | cut -d'"' -f4)
    ORG_ID=$(cat .vercel/project.json | grep -o '"orgId":"[^"]*"' | cut -d'"' -f4)
    echo "✅ Found Vercel project configuration:"
    echo "   Project ID: $PROJECT_ID"
    echo "   Org ID: $ORG_ID"
    echo ""
else
    echo "❌ Could not find .vercel/project.json"
    exit 1
fi

# Check if GitHub CLI is available
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed"
    echo "   Install it from: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI"
    echo "   Run: gh auth login"
    exit 1
fi

echo "🔑 Setting up GitHub secrets..."
echo ""

# Get Vercel token
echo "${YELLOW}Please provide your Vercel token:${NC}"
echo "   1. Go to https://vercel.com/account/tokens"
echo "   2. Create a new token (name it 'GitHub Actions')"
echo "   3. Copy the token"
echo ""
read -p "Enter Vercel token (or press Enter to skip and set manually): " VERCEL_TOKEN

if [ -z "$VERCEL_TOKEN" ]; then
    echo ""
    echo "${YELLOW}⚠️  Skipping token setup. You'll need to set it manually:${NC}"
    echo ""
    echo "Run these commands:"
    echo "  gh secret set VERCEL_TOKEN -R $REPO"
    echo "  gh secret set VERCEL_ORG_ID -R $REPO --body '$ORG_ID'"
    echo "  gh secret set VERCEL_PROJECT_ID -R $REPO --body '$PROJECT_ID'"
    echo ""
    exit 0
fi

# Set GitHub secrets
echo ""
echo "🔐 Setting GitHub secrets..."

gh secret set VERCEL_TOKEN -R "$REPO" --body "$VERCEL_TOKEN" 2>&1
if [ $? -eq 0 ]; then
    echo "${GREEN}✅ VERCEL_TOKEN set${NC}"
else
    echo "❌ Failed to set VERCEL_TOKEN"
    exit 1
fi

gh secret set VERCEL_ORG_ID -R "$REPO" --body "$ORG_ID" 2>&1
if [ $? -eq 0 ]; then
    echo "${GREEN}✅ VERCEL_ORG_ID set${NC}"
else
    echo "❌ Failed to set VERCEL_ORG_ID"
    exit 1
fi

gh secret set VERCEL_PROJECT_ID -R "$REPO" --body "$PROJECT_ID" 2>&1
if [ $? -eq 0 ]; then
    echo "${GREEN}✅ VERCEL_PROJECT_ID set${NC}"
else
    echo "❌ Failed to set VERCEL_PROJECT_ID"
    exit 1
fi

echo ""
echo "${GREEN}🎉 All secrets configured successfully!${NC}"
echo ""
echo "Next steps:"
echo "  1. Push your code: git push origin main"
echo "  2. Check GitHub Actions: https://github.com/$REPO/actions"
echo "  3. Your site will auto-deploy to https://www.mikiasabate.tech"
echo ""

