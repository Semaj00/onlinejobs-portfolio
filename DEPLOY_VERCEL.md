# Deploying to Vercel

## Step-by-Step Guide

### 1. Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: OnlineJobs portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/onlinejobs-portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click **Sign In** → Choose **GitHub** and authorize
3. Click **Add New Project**
4. Select your repository
5. Vercel will auto-detect Vite settings
6. Click **Deploy**

### 3. Your Site is Live!

- Default URL: `https://onlinejobs-portfolio.vercel.app`
- Visit **Settings** → **Domains** to add a custom domain

### 4. Add a Custom Domain (Optional)

```
1. In Vercel dashboard, go to your project
2. Click Settings → Domains
3. Enter your domain (e.g., yourname.com)
4. Update your domain's DNS records:
   - Type: CNAME
   - Value: cname.vercel-dns.com
```

### Environment Variables (if needed later)

In Vercel dashboard → Settings → Environment Variables:
- Add any API keys or config needed for your portfolio

## That's it! Your portfolio is live.
