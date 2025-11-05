# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest and most popular option for React/Vite projects. It's free and provides automatic deployments.

### Steps:

1. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live at `https://your-project-name.vercel.app`

3. **Custom Domain** (Optional):
   - In your Vercel project dashboard, go to Settings → Domains
   - Add your custom domain

---

## Option 2: Netlify

Another popular and free hosting option.

### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

3. **Custom Domain** (Optional):
   - Go to Site settings → Domain management
   - Add your custom domain

---

## Option 3: GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   Add this field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "gh-pages" branch
   - Your site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Option 4: Cloudflare Pages

Fast and free hosting with great performance.

### Steps:

1. **Push your code to GitHub**

2. **Deploy to Cloudflare Pages**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up/Login
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"
   - Your site will be live at `https://your-project.pages.dev`

---

## Before Deploying

Make sure to:
1. Test your build locally:
   ```bash
   npm run build
   npm run preview
   ```
2. Check that all links work correctly
3. Verify responsive design on different screen sizes
4. Test all interactive elements

---

## Quick Deploy Commands

### Vercel CLI (Alternative):
```bash
npm install -g vercel
vercel
```

### Netlify CLI (Alternative):
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## Recommended: Vercel

✅ Easiest setup  
✅ Automatic deployments on every push  
✅ Free SSL certificate  
✅ Custom domain support  
✅ Great performance  
✅ No credit card required

