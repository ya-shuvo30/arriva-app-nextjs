# 🚀 Quick Start - Deploy to GitHub Pages

## One-Time Setup (5 minutes)

### 1. Update Your Domain
Edit `public/CNAME` with your actual domain:
```bash
# Replace "yourdomain.com" with your domain, e.g.:
www.arrivasoft.com
```

### 2. Configure GitHub Pages
1. Go to: https://github.com/ya-shuvo30/arriva-app-nextjs/settings/pages
2. Under **Source**, select: `GitHub Actions`
3. Click **Save**

### 3. Configure Namecheap DNS
1. Log into Namecheap → **Domain List** → Your domain → **Manage**
2. Go to **Advanced DNS** tab
3. Add these records:

| Type  | Host | Value               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | ya-shuvo30.github.io |

4. Delete any conflicting records
5. Save

## Deploy

### Option 1: Automatic (Recommended)
Push to main branch:
```bash
git add .
git commit -m "Deploy"
git push origin main
```

### Option 2: Manual
1. Go to: https://github.com/ya-shuvo30/arriva-app-nextjs/actions
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow" → "Run workflow"

## Verify

1. **Check deployment:** https://github.com/ya-shuvo30/arriva-app-nextjs/actions
2. **Wait for DNS:** 24-48 hours (usually faster)
3. **Visit site:** https://yourdomain.com
4. **Enable HTTPS:** Settings → Pages → Check "Enforce HTTPS"

## Need Help?

- 📖 Full guide: [`DEPLOYMENT.md`](../DEPLOYMENT.md)
- ✅ Checklist: [`.github/DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md)

## Common Issues

### Build fails?
```bash
# Test locally first
npm run build
npm run lint
```

### Domain not working?
- Check CNAME file matches domain
- Verify DNS records
- Wait 24-48 hours for propagation
- Clear browser cache

### 404 errors?
- Ensure `output: 'export'` in `next.config.js`
- Check `.nojekyll` exists in `public/`

---

**That's it!** Your site will be live at your custom domain once DNS propagates.
