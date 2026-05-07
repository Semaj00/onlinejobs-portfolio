# Deploying to GitHub Pages

## Step-by-Step Guide

### Option A: Deploy to `username.github.io` (Org Pages)

Use this if you want your portfolio at `https://username.github.io`.

#### 1. Create a Repository Named `username.github.io`

```bash
# Replace USERNAME with your GitHub username
git init
git add .
git commit -m "Initial commit: OnlineJobs portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

#### 2. GitHub Actions Deploys Automatically

- The workflow in `.github/workflows/deploy.yml` runs on every push to `main`
- Your site appears at `https://USERNAME.github.io`

#### 3. Verify the Deployment

- Go to your repo → **Settings** → **Pages**
- Confirm **Source** is set to **GitHub Actions**
- Check the **Actions** tab for deployment logs

### Option B: Deploy to `username.github.io/repo-name` (Project Pages)

Use this if you want your portfolio at a project URL like `https://username.github.io/onlinejobs-portfolio`.

#### 1. Create Any Named Repository

```bash
git init
git add .
git commit -m "Initial commit: OnlineJobs portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/onlinejobs-portfolio.git
git push -u origin main
```

#### 2. GitHub Actions Deploys Automatically

- The workflow in `.github/workflows/deploy.yml` runs on every push to `main`
- Your site appears at `https://USERNAME.github.io/onlinejobs-portfolio`

#### 3. Verify the Deployment

- Go to your repo → **Settings** → **Pages**
- Confirm **Source** is set to **GitHub Actions**
- Check the **Actions** tab for deployment logs

### 3. Add a Custom Domain (Optional)

```
1. Go to your repo → Settings → Pages
2. Under "Custom domain", enter your domain (e.g., yourname.com)
3. Update your domain's DNS records:
   - Type: CNAME
   - Value: USERNAME.github.io
```

Alternatively, for a subdomain like `portfolio.yourname.com`:
   - Type: CNAME
   - Value: USERNAME.github.io

### Deploy on Every Push

Your site auto-deploys whenever you push to `main`. The workflow takes 1-2 minutes.

### Troubleshooting

**Site not showing?**
- Go to **Actions** tab and check for workflow errors
- Ensure branch is `main` or `master`
- In **Settings** → **Pages**, confirm source is **GitHub Actions**

**Old content showing?**
- Clear browser cache (Ctrl+Shift+Delete on Windows)
- Wait 5 minutes for CDN to refresh

## That's it! Your portfolio is live and auto-deploys.
