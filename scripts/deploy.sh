#!/bin/bash

# Deployment script for mikiasabate.tech
# This script helps deploy the website to production

set -e

echo "🚀 Starting deployment process..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo -e "${GREEN}✓${NC} Node.js version: $(node -v)"

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

# Run linting
echo -e "${BLUE}🔍 Running linter...${NC}"
npm run lint || echo -e "${YELLOW}⚠ Linter found some issues, but continuing...${NC}"

# Build the project
echo -e "${BLUE}🏗️  Building project...${NC}"
npm run build

echo -e "${GREEN}✓${NC} Build completed successfully!"

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo -e "${BLUE}🚀 Deploying to Vercel...${NC}"
    read -p "Deploy to production? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        vercel --prod
        echo -e "${GREEN}✓${NC} Deployment completed!"
    else
        echo -e "${YELLOW}Deployment cancelled.${NC}"
    fi
else
    echo -e "${YELLOW}⚠ Vercel CLI not found.${NC}"
    echo "To deploy to Vercel, install it with: npm i -g vercel"
    echo ""
    echo "Alternative deployment options:"
    echo "1. Use GitHub Actions (already configured)"
    echo "2. Deploy manually to your hosting provider"
    echo "3. See DEPLOYMENT.md for detailed instructions"
fi

echo -e "${GREEN}✅ Deployment process completed!${NC}"

