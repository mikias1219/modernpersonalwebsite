#!/bin/bash

# Script to help add GitHub Actions workflows via web interface

echo "🚀 Adding GitHub Actions Workflows"
echo ""
echo "Since GitHub requires workflow scope for API access, we'll use the web interface."
echo ""

REPO="mikias1219/modernpersonalwebsite"
BASE_URL="https://github.com/$REPO/new/main"

echo "📋 Workflow files to add:"
echo ""
echo "1. deploy.yml"
echo "2. build-check.yml"
echo "3. ci-cd.yml"
echo ""

# Open browser to create first workflow
echo "🌐 Opening GitHub to create workflows..."
echo ""
echo "For each workflow:"
echo "  1. Click the link below"
echo "  2. Type: .github/workflows/[filename].yml"
echo "  3. Copy the content from the file shown"
echo "  4. Paste and commit"
echo ""

echo "📝 Workflow 1: deploy.yml"
echo "   URL: $BASE_URL?filename=.github/workflows/deploy.yml"
echo "   Content:"
echo "   ──────────────────────────────────────"
cat .github/workflows/deploy.yml | head -20
echo "   ... (see full file: .github/workflows/deploy.yml)"
echo ""

read -p "Press Enter to open deploy.yml workflow page..." 
xdg-open "$BASE_URL?filename=.github/workflows/deploy.yml" 2>/dev/null || \
open "$BASE_URL?filename=.github/workflows/deploy.yml" 2>/dev/null || \
echo "Please open: $BASE_URL?filename=.github/workflows/deploy.yml"

echo ""
echo "After adding deploy.yml, run this script again for the next workflow."
echo "Or manually add:"
echo "  - .github/workflows/build-check.yml"
echo "  - .github/workflows/ci-cd.yml"

