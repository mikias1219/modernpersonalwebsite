# Deployment Guide for mikiasabate.tech

This guide will help you deploy your new website to https://www.mikiasabate.tech

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is the easiest and most optimized platform for Next.js applications.

#### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

4. **Connect Your Domain**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Domains
   - Add `www.mikiasabate.tech` and `mikiasabate.tech`
   - Update your DNS records as instructed by Vercel

#### Automatic Deployment:
- Connect your GitHub repository to Vercel
- Every push to `main` branch will automatically deploy
- Vercel will handle SSL certificates automatically

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

4. **Configure Domain**:
   - Add your domain in Netlify dashboard
   - Update DNS records

### Option 3: Custom Server (VPS/Cloud)

If you're using a VPS or cloud server:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Use PM2 for process management**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "mikias-website" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx** (reverse proxy):
   ```nginx
   server {
       listen 80;
       server_name www.mikiasabate.tech mikiasabate.tech;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d mikiasabate.tech -d www.mikiasabate.tech
   ```

## Environment Variables

If you need to set environment variables (for email, etc.):

### Vercel:
- Go to Project Settings → Environment Variables
- Add your variables there

### Netlify:
- Go to Site Settings → Environment Variables
- Add your variables

### Custom Server:
- Create a `.env.local` file (already in .gitignore)
- Add your variables there

## Post-Deployment Checklist

- [ ] Verify website loads at https://www.mikiasabate.tech
- [ ] Test dark/light mode toggle
- [ ] Test contact form email functionality
- [ ] Verify all links work correctly
- [ ] Check mobile responsiveness
- [ ] Test page load speed
- [ ] Verify SSL certificate is active
- [ ] Check Google Analytics (if applicable)
- [ ] Test all navigation links
- [ ] Verify social media links

## Troubleshooting

### Build Errors:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Domain Not Working:
- Check DNS records are correctly configured
- Wait for DNS propagation (can take up to 48 hours)
- Verify SSL certificate is active

### Email Not Working:
- Check SMTP credentials in environment variables
- Verify API route is accessible
- Check server logs for errors

## Support

For issues or questions, check:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs
- Your hosting provider's documentation

