#!/bin/bash

# Automated script to fix Vercel token by creating a new one via API

set -e

echo "🔧 Automatically fixing Vercel token..."
echo ""

# Check if we can access Vercel API
AUTH_FILE="$HOME/.vercel/auth.json"

if [ ! -f "$AUTH_FILE" ]; then
    echo "❌ Vercel auth file not found"
    echo "   Please run: vercel login"
    exit 1
fi

# Try to extract token from auth file (if available)
CLI_TOKEN=$(cat "$AUTH_FILE" 2>/dev/null | grep -o '"token":"[^"]*"' | cut -d'"' -f4 2>/dev/null || echo "")

if [ -z "$CLI_TOKEN" ]; then
    echo "⚠️  Cannot automatically create token via API"
    echo ""
    echo "Please create token manually:"
    echo "1. Open: https://vercel.com/account/tokens"
    echo "2. Click 'Create Token'"
    echo "3. Name: 'GitHub Actions'"
    echo "4. Copy the token"
    echo ""
    echo "Then run: ./scripts/fix-vercel-token.sh"
    exit 1
fi

echo "📝 Creating new Vercel token via API..."
echo ""

# Create token via Vercel API
TOKEN_RESPONSE=$(curl -s -X POST "https://api.vercel.com/v2/tokens" \
    -H "Authorization: Bearer $CLI_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"name":"GitHub Actions","expiration":null}' 2>&1)

# Check if successful
if echo "$TOKEN_RESPONSE" | grep -q "token"; then
    NEW_TOKEN=$(echo "$TOKEN_RESPONSE" | grep -o '"token":"[^"]*"' | cut -d'"' -f4 | head -1)
    
    if [ -z "$NEW_TOKEN" ]; then
        # Try alternative JSON parsing
        NEW_TOKEN=$(echo "$TOKEN_RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin).get('token', ''))" 2>/dev/null || echo "")
    fi
    
    if [ -n "$NEW_TOKEN" ]; then
        echo "✅ Token created successfully!"
        echo ""
        echo "🔐 Setting GitHub secret..."
        
        REPO="mikias1219/modernpersonalwebsite"
        gh secret set VERCEL_TOKEN -R "$REPO" --body "$NEW_TOKEN"
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "🎉 VERCEL_TOKEN fixed and updated!"
            echo ""
            echo "✅ The next deployment should work now!"
            exit 0
        fi
    fi
fi

echo "⚠️  Could not create token automatically"
echo ""
echo "Please create token manually:"
echo "1. Open: https://vercel.com/account/tokens"
echo "2. Click 'Create Token'"
echo "3. Name: 'GitHub Actions'"
echo "4. Copy the token"
echo ""
echo "Then run: ./scripts/fix-vercel-token.sh"

