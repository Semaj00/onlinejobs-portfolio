# Deploying to Netlify

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

### 2. Deploy to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Click **Sign In** → Choose **GitHub** and authorize
3. Click **Add new site** → **Import an existing project**
4. Choose your repository
5. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**

### 3. Your Site is Live!

- Default URL: `https://your-site-name.netlify.app`
- The URL can be changed in **Site settings** → **Change site name**

### 4. Add a Custom Domain (Optional)

```
1. In Netlify dashboard, go to your site
2. Click Site settings → Domain management
3. Click Add custom domain
4. Enter your domain (e.g., yourname.com)
5. Netlify will provide DNS instructions
```

### Set Environment Variables (if needed later)

- Go to **Site settings** → **Build & deploy** → **Environment**
- Add any API keys or config needed

### Deploy on Every Push

Netlify auto-deploys whenever you push to `main` branch. No extra setup needed!

## That's it! Your portfolio is live and auto-deploys.
