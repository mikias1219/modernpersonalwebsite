#!/bin/bash

# Complete script to add all workflows using GitHub CLI with proper encoding

set -e

REPO="mikias1219/modernpersonalwebsite"
BRANCH="main"

echo "🚀 Adding GitHub Actions Workflows"
echo ""

# Function to create workflow file
create_workflow() {
    local file=$1
    local name=$2
    
    echo "📝 Creating $name..."
    
    # Read file content and encode to base64
    CONTENT=$(cat "$file" | base64 -w 0)
    
    # Create JSON payload
    PAYLOAD=$(cat <<EOF
{
  "message": "Add $name workflow",
  "content": "$CONTENT",
  "branch": "$BRANCH"
}
EOF
)
    
    # Try to create the file
    RESPONSE=$(gh api repos/$REPO/contents/.github/workflows/$file \
        -X PUT \
        --input - <<< "$PAYLOAD" 2>&1) || {
        echo "⚠️  Could not create via API (may need workflow scope)"
        echo "   Please add manually via GitHub web interface"
        echo "   File: $file"
        return 1
    }
    
    echo "✅ Created $name"
}

# Create workflows directory first (if it doesn't exist)
echo "📁 Ensuring .github/workflows directory exists..."

# Try to create a dummy file first to create the directory
DUMMY_CONTENT=$(echo "# Workflows" | base64 -w 0)
DUMMY_PAYLOAD=$(cat <<EOF
{
  "message": "Create workflows directory",
  "content": "$DUMMY_CONTENT",
  "branch": "$BRANCH"
}
EOF
)

gh api repos/$REPO/contents/.github/workflows/.gitkeep \
    -X PUT \
    --input - <<< "$DUMMY_PAYLOAD" 2>&1 || echo "Directory may already exist"

# Add each workflow
create_workflow "deploy.yml" "Deploy to Production"
create_workflow "build-check.yml" "Build and Test"
create_workflow "ci-cd.yml" "CI/CD Pipeline"

echo ""
echo "✅ All workflows added!"
echo ""
echo "🔍 Verify at: https://github.com/$REPO/actions"
echo ""

