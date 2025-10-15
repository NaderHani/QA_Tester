# Portfolio Deployment Guide

## ✅ Preparations Complete

Your portfolio is now ready for deployment with the following fixes:

### 1. Fixed Vite Configuration

- Changed `base: "/QA_Tester/"` to `base: "./"`
- This prevents white screen issues on deployment
- Added build optimizations

### 2. Created Configuration Files

- `vercel.json` - Handles routing for Vercel
- `netlify.toml` - Backup option for Netlify
- `.gitignore` - Proper git configuration

### 3. Build Tested Successfully ✓

- Project builds without errors
- Output: `dist` folder ready for deployment

---

## 🚀 Deploy to Vercel (Recommended - Easiest Method)

### Option 1: Using Vercel Website (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Import Project**:

   - Click "Add New Project"
   - Import your GitHub repository
   - Or drag & drop the `dist` folder

4. **Configure (if asked)**:

   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Click Deploy** - Done! Your site will be live in 1-2 minutes

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: Select your account
# - Link to existing project: N (first time) or Y (updates)
# - Project name: portfolio (or your preferred name)
# - Directory: ./ (press Enter)
# - Override settings: N (press Enter)

# For production deployment
vercel --prod
```

---

## 📁 Manual Deployment Steps

If you prefer to upload the built files manually:

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Upload the `dist` folder**:
   - The `dist` folder contains all deployment files
   - Upload to any static hosting service:
     - Vercel
     - Netlify
     - GitHub Pages
     - Firebase Hosting
     - Cloudflare Pages

---

## 🔧 Deployment Configuration

### Vercel Settings (vercel.json)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Environment Variables

No environment variables needed for basic deployment.

---

## 🌐 Post-Deployment

After deployment, you'll get a URL like:

- `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain

---

## ✨ What Was Fixed

### White Screen Issue Resolution

**Problem**: The app showed a white screen on deployment
**Solution**: Changed `base: "/QA_Tester/"` to `base: "./"`

This ensures assets load correctly regardless of the deployment URL.

### Build Optimization

- Removed source maps for smaller bundle size
- Optimized chunk splitting
- Added proper routing configuration

---

## 📊 Build Output

Your project successfully builds to:

- `dist/index.html` (1.00 kB)
- `dist/assets/index-*.css` (~66 kB)
- `dist/assets/index-*.js` (~273 kB)
- Total size: ~340 kB (gzipped: ~88 kB)

---

## 🆘 Troubleshooting

### If you see a white screen:

1. Check browser console for errors
2. Verify the `dist` folder was deployed, not the root folder
3. Clear browser cache and hard reload (Ctrl + F5)

### If assets don't load:

1. Ensure `base: "./"` is in `vite.config.js`
2. Rebuild the project: `npm run build`
3. Redeploy

### If routing doesn't work:

1. Make sure `vercel.json` is in the root directory
2. For other hosts, configure SPA redirects

---

## 🎉 Quick Deploy Summary

**Fastest Way:**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repo
5. Click "Deploy"

That's it! Your portfolio will be live! 🚀
