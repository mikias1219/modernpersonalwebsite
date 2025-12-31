# Setup GitHub Actions Workflows

GitHub requires special permissions for workflow files. Follow these steps:

## Option 1: Manual Setup (Recommended)

1. **Go to your GitHub repository:**
   - https://github.com/mikias1219/modernpersonalwebsite

2. **Create the workflow files:**
   - Click "Add file" → "Create new file"
   - Path: `.github/workflows/deploy.yml`
   - Copy content from the file in your local repository
   - Click "Commit new file"
   - Repeat for `.github/workflows/build-check.yml`

## Option 2: Push via Git CLI

If you have proper GitHub permissions:

```bash
git add .github/workflows/
git commit -m "Add GitHub Actions workflows"
git push
```

## Option 3: Skip Workflows (Still Works!)

The deployment scripts work without GitHub Actions:
- Use `npm run deploy` locally
- Or deploy directly via Vercel dashboard
- Workflows are optional for automation

---

**Note:** The website is fully functional and ready to deploy even without GitHub Actions workflows!

