# 🚀 CI/CD Quick Start Guide

Your website now has **automatic deployment** set up! Every time you push to GitHub, your `.tech` domain will automatically update.

## ✅ What's Already Done

1. ✅ GitHub Actions workflows created
2. ✅ Build and test automation configured
3. ✅ Automatic deployment to Vercel production
4. ✅ Domain update automation ready

## 🔧 What You Need to Do

### Step 1: Get Vercel Credentials (5 minutes)

1. **Get Vercel Token:**
   - Go to https://vercel.com/dashboard
   - Settings → Tokens
   - Create new token → Copy it

2. **Get Vercel Org ID:**
   - Settings → General
   - Copy "Team ID" or "User ID"

3. **Get Vercel Project ID:**
   - Go to your project
   - Settings → General
   - Copy "Project ID"

### Step 2: Add GitHub Secrets (2 minutes)

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these 3 secrets:

   ```
   VERCEL_TOKEN = (your token from step 1)
   VERCEL_ORG_ID = (your org ID from step 1)
   VERCEL_PROJECT_ID = (your project ID from step 1)
   ```

### Step 3: Push Your Code (1 minute)

```bash
git add .
git commit -m "Add CI/CD automation"
git push origin main
```

### Step 4: Watch It Deploy! 🎉

1. Go to GitHub → Actions tab
2. Watch the workflow run
3. Your site will be live at https://www.mikiasabate.tech

## 📋 How It Works

```
Push to GitHub (main branch)
    ↓
GitHub Actions triggers
    ↓
Build & Test
    ↓
Deploy to Vercel Production
    ↓
Your .tech domain updates automatically! ✨
```

## 🔍 Verify It's Working

After pushing, check:
- ✅ GitHub Actions tab shows green checkmarks
- ✅ Your site at mikiasabate.tech has the latest changes
- ✅ Vercel dashboard shows new deployment

## 🆘 Troubleshooting

**Workflow fails?**
- Check all 3 secrets are set correctly
- Verify Vercel credentials are valid
- Check Actions tab for error details

**Domain not updating?**
- Wait 2-3 minutes for DNS propagation
- Check Vercel dashboard → Domains
- Verify domain is connected to project

## 📚 More Details

For detailed setup instructions, see:
- [.github/SETUP_CI_CD.md](.github/SETUP_CI_CD.md)

---

**That's it!** Once you add the secrets, every push will automatically deploy to your domain. 🚀

