# Domain Update Instructions

## ✅ Current Status

The domain has been manually updated to point to the latest deployment:
- `mikiasabate.tech` → Latest deployment
- `www.mikiasabate.tech` → Latest deployment

## 🔄 For Future Deployments

To ensure the domain automatically updates on each deployment, update the workflow files manually via GitHub web interface:

### Update `.github/workflows/deploy.yml`

Change this section:
```yaml
vercel-args: '--prod'
```

To:
```yaml
vercel-args: '--prod --yes'
vercel-aliases: 'mikiasabate.tech,www.mikiasabate.tech'
```

### Update `.github/workflows/ci-cd.yml`

Make the same change in the deploy step.

## 📝 Manual Domain Update (if needed)

If the domain doesn't update automatically, run:

```bash
# Get latest deployment URL
vercel ls | head -3

# Update domain to latest deployment
vercel alias set <latest-deployment-url> mikiasabate.tech
vercel alias set <latest-deployment-url> www.mikiasabate.tech
```

## ✅ Verification

Check if domain is updated:
```bash
curl -I https://www.mikiasabate.tech
```

Look for the `age` header - lower values mean fresher content.

