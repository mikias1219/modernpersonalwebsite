# 🚀 Add GitHub Actions Workflows Manually

Due to GitHub security restrictions, workflow files need to be added manually through the GitHub web interface.

## ✅ What's Already Done

- ✅ GitHub secrets configured:
  - `VERCEL_ORG_ID` = `team_Ik0AQq7ML3DNZdWyhI7t91Wl`
  - `VERCEL_PROJECT_ID` = `prj_Xb10AWYiw8shmRvMHcVjstQOkXye`
- ✅ All code pushed to GitHub
- ✅ Workflow files created locally

## 📝 Steps to Add Workflows

### Option 1: Using GitHub Web Interface (Recommended)

1. **Go to your repository:**
   - https://github.com/mikias1219/modernpersonalwebsite

2. **Create the workflows directory:**
   - Click "Add file" → "Create new file"
   - Type: `.github/workflows/deploy.yml`
   - Copy the content from `.github/workflows/deploy.yml` in your local files
   - Click "Commit new file"

3. **Add the other workflow files:**
   - Repeat for `.github/workflows/build-check.yml`
   - Repeat for `.github/workflows/ci-cd.yml`

### Option 2: Using GitHub CLI (If you have workflow scope)

```bash
cd /home/mikias/Mikias/Personal/website
gh workflow create .github/workflows/deploy.yml
gh workflow create .github/workflows/build-check.yml
gh workflow create .github/workflows/ci-cd.yml
```

### Option 3: Copy-Paste Workflow Content

The workflow files are in your local `.github/workflows/` directory. You can:

1. Open each file locally
2. Copy the content
3. Go to GitHub → Create new file
4. Paste the content
5. Save

## 🔑 Final Step: Add Vercel Token

After workflows are added, you need to set the Vercel token:

```bash
# Run this script:
./scripts/get-vercel-token.sh

# Or manually:
gh secret set VERCEL_TOKEN -R mikias1219/modernpersonalwebsite
# (Then paste your token when prompted)
```

**To get your Vercel token:**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "GitHub Actions"
4. Copy the token

## ✅ Verify Setup

After adding workflows and token:

1. Make a small change to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test CI/CD"
   git push origin main
   ```
3. Go to GitHub → Actions tab
4. Watch the workflow run
5. Your site will deploy to https://www.mikiasabate.tech

## 📋 Workflow Files Location

All workflow files are ready in:
- `.github/workflows/deploy.yml`
- `.github/workflows/build-check.yml`
- `.github/workflows/ci-cd.yml`

Just copy them to GitHub!

