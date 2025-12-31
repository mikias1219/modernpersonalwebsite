#!/bin/bash

# Script to display workflow content for easy copy-paste to GitHub

echo "🚀 GitHub Actions Workflows - Copy & Paste Guide"
echo "════════════════════════════════════════════════"
echo ""
echo "All secrets are already configured! ✅"
echo "Now add the workflow files via GitHub web interface:"
echo ""
echo "📋 Steps:"
echo "   1. Go to: https://github.com/mikias1219/modernpersonalwebsite"
echo "   2. Click 'Add file' → 'Create new file'"
echo "   3. Type the path: .github/workflows/[filename].yml"
echo "   4. Copy the content below for each file"
echo "   5. Paste and click 'Commit new file'"
echo ""
echo "════════════════════════════════════════════════"
echo ""

# Function to display workflow
show_workflow() {
    local file=$1
    local name=$2
    
    echo "📄 WORKFLOW: $name"
    echo "   File path: .github/workflows/$file"
    echo "   ──────────────────────────────────────────────────────────"
    cat ".github/workflows/$file"
    echo "   ──────────────────────────────────────────────────────────"
    echo ""
    echo "✅ Copy the content above (between the lines)"
    echo ""
    read -p "Press Enter to continue to next workflow..."
    echo ""
    echo ""
}

echo "Starting workflow display..."
echo ""

show_workflow "deploy.yml" "Deploy to Production"
show_workflow "build-check.yml" "Build and Test"  
show_workflow "ci-cd.yml" "CI/CD Pipeline"

echo "════════════════════════════════════════════════"
echo "✅ All workflows displayed!"
echo ""
echo "🔍 After adding all workflows, verify at:"
echo "   https://github.com/mikias1219/modernpersonalwebsite/actions"
echo ""
echo "🚀 Then make a test commit to trigger deployment!"

