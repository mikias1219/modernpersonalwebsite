# 🚀 Deploy Your Website NOW - Quick Guide

Your website is ready to deploy! Follow these simple steps:

## ⚡ Fastest Way (5 minutes)

### Step 1: Deploy to Vercel

1. **Go to:** https://vercel.com/new
2. **Click:** "Import Git Repository"
3. **Select:** `mikias1219/modernpersonalwebsite`
4. **Click:** "Deploy" (use all default settings)
5. **Wait:** 2-3 minutes for deployment

### Step 2: Add Your Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add: `www.mikiasabate.tech`
   - Add: `mikiasabate.tech`

2. **Update DNS:**
   - Go to your domain registrar (where you bought mikiasabate.tech)
   - Add CNAME record:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
   - Add A record (or use CNAME):
     - Name: `@` (or root)
     - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for exact IP)

3. **Wait:** DNS propagation (5 minutes to 48 hours)

### Step 3: Verify

- Visit: https://www.mikiasabate.tech
- Your website should be live! 🎉

---

## 🔄 Automatic Deployment (Set Once, Deploy Forever)

After the first deployment:

1. **Get Vercel tokens:**
   - Vercel Dashboard → Settings → Tokens
   - Create new token → Copy it

2. **Add to GitHub Secrets:**
   - GitHub repo → Settings → Secrets and variables → Actions
   - Add secret: `VERCEL_TOKEN` = (your token)
   - Add secret: `VERCEL_ORG_ID` = (from Vercel Settings → General)
   - Add secret: `VERCEL_PROJECT_ID` = (from Vercel project settings)

3. **Done!** Every push to `main` will auto-deploy.

---

## 📧 Email Setup (Optional)

If you want the contact form to work:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add (if you want to use different email):
     - `EMAIL_HOST_USER` = your-email@gmail.com
     - `EMAIL_HOST_PASSWORD` = your-app-password

**Note:** The contact form already has your Gmail credentials configured in the code.

---

## ✅ That's It!

Your website is now:
- ✅ Configured for mikiasabate.tech
- ✅ Optimized for production
- ✅ Ready for automatic deployments
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Dark mode enabled

**Need help?** Check `DEPLOYMENT.md` for detailed instructions.

