# CI/CD Setup Guide

This guide will help you set up automatic deployment to your `.tech` domain using GitHub Actions and Vercel.

## Prerequisites

1. Your project is connected to Vercel
2. Your domain `mikiasabate.tech` is configured in Vercel
3. You have a GitHub repository

## Step 1: Get Vercel Credentials

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings** → **Tokens**
3. Create a new token (name it "GitHub Actions" or similar)
4. Copy the token - this is your `VERCEL_TOKEN`

5. Go to **Settings** → **General**
6. Copy your **Team ID** or **User ID** - this is your `VERCEL_ORG_ID`

7. Go to your project in Vercel
8. Go to **Settings** → **General**
9. Copy your **Project ID** - this is your `VERCEL_PROJECT_ID`

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - **Name:** `VERCEL_TOKEN`
     **Value:** Your Vercel token from Step 1

   - **Name:** `VERCEL_ORG_ID`
     **Value:** Your Vercel Org/User ID from Step 1

   - **Name:** `VERCEL_PROJECT_ID`
     **Value:** Your Vercel Project ID from Step 1

## Step 3: Verify Domain Configuration

1. In Vercel Dashboard, go to your project
2. Navigate to **Settings** → **Domains**
3. Ensure `mikiasabate.tech` and `www.mikiasabate.tech` are added
4. Verify DNS settings are correct

## Step 4: Test the Workflow

1. Make a small change to your code
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Test CI/CD deployment"
   git push origin main
   ```

3. Go to your GitHub repository
4. Click on the **Actions** tab
5. You should see the workflow running
6. Once complete, check your site at `https://www.mikiasabate.tech`

## How It Works

### On Push to Main Branch:
1. **Build Check** workflow runs:
   - Installs dependencies
   - Runs linter
   - Builds the project
   - Verifies build output

2. **Deploy to Production** workflow runs:
   - Builds the project
   - Deploys to Vercel production
   - Your `.tech` domain is automatically updated

### On Pull Requests:
- Only the build check runs (no deployment)
- Ensures code quality before merging

## Troubleshooting

### Deployment Fails
- Check that all secrets are correctly set in GitHub
- Verify Vercel credentials are valid
- Check the Actions tab for detailed error messages

### Domain Not Updating
- Ensure domain is properly configured in Vercel
- Check DNS settings
- Wait a few minutes for DNS propagation

### Build Fails
- Check for TypeScript errors
- Verify all dependencies are in `package.json`
- Check the build logs in GitHub Actions

## Manual Deployment

If you need to deploy manually:
```bash
npm run deploy:vercel
```

Or use the Vercel CLI:
```bash
vercel --prod
```

## Support

For issues with:
- **GitHub Actions:** Check the Actions tab in your repository
- **Vercel Deployment:** Check the Vercel dashboard
- **Domain Issues:** Check Vercel domain settings

