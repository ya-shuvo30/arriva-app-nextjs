# 🚀 GitHub Pages Deployment Checklist

## Pre-Deployment Setup

### 1. Repository Configuration
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Code is pushed to `main` branch
- [ ] All tests pass locally (`npm run lint`)
- [ ] Build succeeds locally (`npm run build`)

### 2. GitHub Pages Settings
- [ ] Go to **Settings** → **Pages**
- [ ] Set **Source** to `GitHub Actions`
- [ ] Save settings

### 3. Custom Domain Setup (Namecheap)

#### Get Your Domain Ready
- [ ] Domain purchased from Namecheap
- [ ] Decide on format: `www.yourdomain.com` (recommended) OR `yourdomain.com`

#### Update CNAME File
- [ ] Edit `public/CNAME` file
- [ ] Replace `yourdomain.com` with your actual domain
- [ ] Commit and push changes

#### Configure Namecheap DNS
- [ ] Log into Namecheap account
- [ ] Navigate to **Domain List** → Your domain → **Manage**
- [ ] Go to **Advanced DNS** tab
- [ ] Delete existing A and CNAME records for `@` and `www`
- [ ] Add GitHub Pages A records:
  - `A Record` | `@` | `185.199.108.153`
  - `A Record` | `@` | `185.199.109.153`
  - `A Record` | `@` | `185.199.110.153`
  - `A Record` | `@` | `185.199.111.153`
- [ ] Add CNAME record (if using www):
  - `CNAME` | `www` | `ya-shuvo30.github.io`
- [ ] Set TTL to `Automatic` for all records
- [ ] Save all changes

## Deployment Process

### 4. Trigger Deployment
- [ ] Push to `main` branch (automatic deployment)
  ```bash
  git add .
  git commit -m "Ready for production"
  git push origin main
  ```
- [ ] OR trigger manual deployment from GitHub Actions tab

### 5. Monitor Deployment
- [ ] Go to **Actions** tab in GitHub
- [ ] Watch deployment workflow run
- [ ] Verify build job completes successfully
- [ ] Verify deploy job completes successfully
- [ ] Check for any error messages

## Post-Deployment Verification

### 6. DNS Propagation (Wait 24-48 hours)
- [ ] Check DNS propagation status:
  ```bash
  nslookup yourdomain.com
  ```
- [ ] Verify it points to GitHub Pages IPs
- [ ] Use online tool: https://dnschecker.org

### 7. Enable HTTPS
- [ ] Wait for DNS to fully propagate
- [ ] Go to **Settings** → **Pages**
- [ ] Check **Enforce HTTPS** checkbox
- [ ] Wait 5-10 minutes for certificate provisioning

### 8. Test Website
- [ ] Visit `https://yourdomain.com`
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Check all navigation links work
- [ ] Verify hero carousel rotates
- [ ] Test dashboard carousel rotation
- [ ] Check console for errors (F12)
- [ ] Verify all images load
- [ ] Test contact forms (if applicable)
- [ ] Check footer links
- [ ] Verify HTTPS lock icon appears

### 9. Performance Check
- [ ] Run Google PageSpeed Insights
- [ ] Check mobile responsiveness
- [ ] Verify lazy loading works
- [ ] Test page load speed

### 10. SEO & Analytics
- [ ] Verify meta tags in page source
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Add domain to Google Search Console

## Troubleshooting Checklist

### If Build Fails
- [ ] Check GitHub Actions logs
- [ ] Run `npm run build` locally
- [ ] Fix TypeScript errors
- [ ] Fix linting errors with `npm run lint`
- [ ] Commit and push fixes

### If Custom Domain Doesn't Work
- [ ] Verify CNAME file contains correct domain
- [ ] Check DNS records in Namecheap
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Clear browser cache and DNS cache
- [ ] Try incognito/private browsing mode

### If HTTPS Doesn't Work
- [ ] Ensure DNS is fully propagated first
- [ ] Wait 10-15 minutes after enabling HTTPS
- [ ] Disable and re-enable HTTPS in settings
- [ ] Check domain doesn't have redirect loop

### If 404 Errors Occur
- [ ] Verify `output: 'export'` in `next.config.js`
- [ ] Check `trailingSlash: true` is set
- [ ] Ensure `.nojekyll` file exists in `public/`
- [ ] Rebuild and redeploy

## Maintenance Checklist

### Regular Updates
- [ ] Keep dependencies updated (`npm update`)
- [ ] Monitor GitHub Actions for failed builds
- [ ] Check domain renewal date
- [ ] Review and update content regularly
- [ ] Monitor SSL certificate (auto-renewed by GitHub)

### Content Updates
- [ ] Update content in `data.ts`
- [ ] Test locally with `npm run dev`
- [ ] Build locally with `npm run build`
- [ ] Commit and push to trigger deployment

## Quick Reference

### Important Files
- `public/CNAME` - Custom domain configuration
- `public/.nojekyll` - Bypass Jekyll processing
- `.github/workflows/deploy.yml` - CI/CD pipeline
- `next.config.js` - Next.js configuration
- `DEPLOYMENT.md` - Full deployment guide

### Important URLs
- Repository: https://github.com/ya-shuvo30/arriva-app-nextjs
- Actions: https://github.com/ya-shuvo30/arriva-app-nextjs/actions
- Settings: https://github.com/ya-shuvo30/arriva-app-nextjs/settings/pages

### DNS Check Commands
```bash
# Windows
nslookup yourdomain.com

# Check DNS propagation
# Visit: https://dnschecker.org
```

## Emergency Rollback

If deployment breaks production:

- [ ] Option 1: Revert last commit
  ```bash
  git revert HEAD
  git push origin main
  ```

- [ ] Option 2: Re-run last successful workflow
  - Go to Actions tab
  - Find last successful deployment
  - Click "Re-run jobs"

## Success Criteria

✅ All items checked above
✅ Website loads at custom domain
✅ HTTPS enabled with valid certificate
✅ All pages and features working
✅ Mobile responsive
✅ No console errors
✅ Fast page load times

---

**Last Updated:** December 2025
**Deployment Type:** GitHub Pages with Custom Domain
**Framework:** Next.js 14 (Static Export)
