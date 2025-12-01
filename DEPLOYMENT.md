# Deployment Guide - GitHub Pages with Custom Domain

This guide covers deploying the Arriva Soft website to GitHub Pages with a custom Namecheap domain.

## Prerequisites

- GitHub repository: `ya-shuvo30/arriva-app-nextjs`
- Custom domain purchased from Namecheap
- GitHub account with repository access

## Step 1: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Source: `GitHub Actions`
4. Click **Save**

## Step 2: Update CNAME File

1. Edit `public/CNAME` file
2. Replace `yourdomain.com` with your actual domain (e.g., `arrivasoft.com` or `www.arrivasoft.com`)
3. Commit and push the change

```bash
# Example CNAME content:
arrivasoft.com
```

**Important:** Choose one format:
- `arrivasoft.com` (apex domain) OR
- `www.arrivasoft.com` (subdomain)

Don't include both. Using `www` is recommended for better flexibility.

## Step 3: Configure Namecheap DNS

### Option A: Using WWW Subdomain (Recommended)

1. Log in to Namecheap
2. Go to **Domain List** → Select your domain → **Manage**
3. Navigate to **Advanced DNS** tab
4. Add/Update these DNS records:

| Type  | Host | Value                      | TTL       |
|-------|------|----------------------------|-----------|
| A     | @    | 185.199.108.153            | Automatic |
| A     | @    | 185.199.109.153            | Automatic |
| A     | @    | 185.199.110.153            | Automatic |
| A     | @    | 185.199.111.153            | Automatic |
| CNAME | www  | ya-shuvo30.github.io       | Automatic |

5. Remove any conflicting records (old A records, CNAME records, etc.)

### Option B: Using Apex Domain Only

1. Follow steps 1-3 from Option A
2. Add only these DNS records:

| Type  | Host | Value                      | TTL       |
|-------|------|----------------------------|-----------|
| A     | @    | 185.199.108.153            | Automatic |
| A     | @    | 185.199.109.153            | Automatic |
| A     | @    | 185.199.110.153            | Automatic |
| A     | @    | 185.199.111.153            | Automatic |

3. Update `public/CNAME` to contain only your apex domain (e.g., `arrivasoft.com`)

## Step 4: Enable HTTPS

1. After DNS propagates (can take 24-48 hours, usually faster)
2. Go to GitHub repository **Settings** → **Pages**
3. Check the box: **Enforce HTTPS**
4. Wait a few minutes for SSL certificate to be provisioned

## Step 5: Deploy

The CI/CD pipeline is already configured. Deployment happens automatically:

### Automatic Deployment
- Push to `main` branch triggers deployment
- GitHub Actions builds and deploys to GitHub Pages
- Check the **Actions** tab for deployment status

### Manual Deployment
```bash
# Trigger deployment manually from GitHub UI
1. Go to Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → Select branch "main" → "Run workflow"
```

### Local Testing Before Deployment
```bash
# Build and test locally
npm run build

# Serve the built files (optional - requires http-server)
npx http-server ./out -p 8080
```

## Step 6: Verify Deployment

1. **Check DNS Propagation:**
   ```bash
   # Windows PowerShell
   nslookup yourdomain.com
   
   # Should show GitHub Pages IPs:
   # 185.199.108.153
   # 185.199.109.153
   # 185.199.110.153
   # 185.199.111.153
   ```

2. **Test Website:**
   - Visit `https://yourdomain.com`
   - Verify all pages load correctly
   - Check console for errors
   - Test responsive design on mobile

3. **Verify HTTPS:**
   - Lock icon should appear in browser
   - Certificate should be issued by GitHub

## Troubleshooting

### DNS Not Resolving
- Wait 24-48 hours for full DNS propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows)
- Check DNS settings in Namecheap Advanced DNS tab

### CNAME Conflicts
- Ensure only ONE CNAME file exists in `public/` folder
- CNAME file should contain ONLY the domain, no `https://` or trailing slash

### Build Failures
1. Check GitHub Actions logs in the **Actions** tab
2. Common issues:
   - TypeScript errors: Run `npm run build` locally to test
   - Missing dependencies: Delete `node_modules` and run `npm install`
   - Linting errors: Run `npm run lint` to check

### 404 Errors After Deployment
- Ensure `output: 'export'` is set in `next.config.js`
- Check that `trailingSlash: true` is configured
- Verify `.nojekyll` file exists in `public/` folder

### Custom Domain Not Working
1. Verify CNAME file content matches domain in GitHub Pages settings
2. Check DNS records are correct
3. Wait for DNS propagation
4. Try disabling and re-enabling custom domain in GitHub Pages settings

## CI/CD Pipeline Details

### Workflow File: `.github/workflows/deploy.yml`

**Triggers:**
- Push to `main` branch
- Manual trigger via `workflow_dispatch`

**Jobs:**
1. **Build Job:**
   - Checkout code
   - Setup Node.js 20 with npm caching
   - Install dependencies (`npm ci`)
   - Build Next.js project
   - Upload artifacts

2. **Deploy Job:**
   - Deploy artifacts to GitHub Pages
   - Runs only after successful build

**Optimizations:**
- npm caching for faster builds
- Separate build/deploy jobs for better control
- Concurrency control to prevent conflicts

## Environment Variables

No environment variables are required for this static site. If you add API keys later:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add secrets as **Repository secrets**
3. Reference in workflow: `${{ secrets.YOUR_SECRET_NAME }}`

## Performance Optimization

The site is configured for optimal performance:
- ✅ Static HTML export (no server required)
- ✅ Optimized build with Next.js
- ✅ Gzipped assets
- ✅ Lazy-loaded images
- ✅ CDN delivery via GitHub Pages

## Monitoring

### Check Deployment Status
```bash
# View in browser
https://github.com/ya-shuvo30/arriva-app-nextjs/actions

# Or use GitHub CLI
gh run list --workflow=deploy.yml
```

### Analytics (Optional)
Consider adding:
- Google Analytics
- Plausible Analytics
- Microsoft Clarity

Add tracking code to `app/layout.tsx` in the `<head>` section.

## Rollback Procedure

If a deployment breaks the site:

1. **Quick Fix - Revert Commit:**
   ```bash
   git revert HEAD
   git push origin main
   # This triggers auto-deployment of previous version
   ```

2. **Manual Rollback:**
   - Go to **Actions** tab
   - Find last successful deployment
   - Click **Re-run jobs**

## Custom Domain Migration Checklist

- [ ] Purchase domain from Namecheap
- [ ] Update `public/CNAME` with your domain
- [ ] Configure DNS records in Namecheap
- [ ] Enable GitHub Pages in repository settings
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Enable HTTPS in GitHub Pages settings
- [ ] Test website on custom domain
- [ ] Update social media links with new domain
- [ ] Update business cards/marketing materials

## Support

For issues:
1. Check GitHub Actions logs
2. Review this guide
3. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
4. Check [Next.js static export docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## Additional Resources

- [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Namecheap DNS Configuration](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
