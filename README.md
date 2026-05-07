# OnlineJobs.ph Portfolio — Vite + React + Tailwind

Fully responsive, modern personal portfolio for freelancers. Deploy to Vercel, Netlify, or GitHub Pages in minutes.

---

## 🚀 Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

**Easiest option. Free tier includes all features.**

1. Push your project to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click "New Project" → Import your repository.
4. Vercel auto-detects the Vite setup.
5. Click "Deploy".

**That's it!** Your site is live at `your-project.vercel.app`.

**Custom Domain:**
- In Vercel dashboard, go to Settings → Domains.
- Add your domain and follow the DNS instructions.

---

### Option 2: Netlify

**Great alternative with continuous deployment.**

1. Push your project to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign in.
3. Click "Add new site" → "Import an existing project".
4. Connect your GitHub repo.
5. Netlify reads `netlify.toml` and auto-configures.
6. Click "Deploy site".

**That's it!** Your site is live at `your-site-name.netlify.app`.

**Custom Domain:**
- In Netlify dashboard, go to Site settings → Domain management.
- Add your custom domain.

---

### Option 3: GitHub Pages (Free)

**Fastest setup if you only have a GitHub account.**

1. **Rename your repo to `username.github.io`** (if deploying to org pages).
   - Or leave the name as-is for project pages (site will be at `username.github.io/repo-name`).

2. **Push to GitHub** with `main` or `master` as your default branch.

3. **GitHub Actions will auto-deploy:**
   - The workflow in `.github/workflows/deploy.yml` runs automatically on every push.
   - Your site appears at `https://username.github.io` (or `https://username.github.io/repo-name`).

4. **Check the deployment:**
   - Go to your repo → Settings → Pages.
   - Confirm the source is set to "GitHub Actions".

**Custom Domain:**
- Go to Settings → Pages → Custom domain.
- Add your domain (e.g., `yourname.com`).
- Update your domain's DNS records pointing to GitHub Pages.

---

## ⚙️ Configuration Files

- **`vercel.json`** — Vercel deployment config.
- **`netlify.toml`** — Netlify deployment config.
- **`.github/workflows/deploy.yml`** — GitHub Pages CI/CD workflow.
- **`vite.config.js`** — Vite build config.
- **`tailwind.config.js`** — Tailwind CSS config.

---

## 🎨 Customization

### Update Your Name & Details

Edit these files:

- **`index.html`** — Page title and meta tags.
- **`src/components/Navbar.jsx`** — Your name and tagline.
- **`src/components/Hero.jsx`** — Introduction text and resume link.
- **`src/components/Contact.jsx`** — Email, phone, social links.

### Add Your Profile Image

1. Place a square image (preferably 500×500px) in `src/assets/` named `profile.png` or `profile.jpg`.
2. Update the import in:
   - `src/components/Hero.jsx`
   - `src/components/About.jsx`

Example:
```javascript
import profileImage from '../assets/profile.png'
```

### Add Your Resume

1. Place `resume.pdf` in the project root.
2. The "Download Resume" button will work automatically.

### Update Content

Edit these components to match your portfolio:

- **`src/components/About.jsx`** — Your bio.
- **`src/components/Skills.jsx`** — Your skills.
- **`src/components/Services.jsx`** — Services you offer.
- **`src/components/Portfolio.jsx`** — Your projects.
- **`src/components/Timeline.jsx`** — Your experience.
- **`src/components/Testimonials.jsx`** — Client feedback.
- **`src/components/Contact.jsx`** — Contact info.

---

## 🎬 Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Dark mode toggle with localStorage persistence  
✅ Smooth page scrolling and animations  
✅ Typing animation in Hero section  
✅ Scroll progress indicator  
✅ Back-to-top button  
✅ Glass morphism design  
✅ Production-ready optimized build  

---

## 🛠️ Tech Stack

- **React 18** — UI library.
- **Vite 5** — Build tool & dev server.
- **Tailwind CSS 3** — Utility-first styling.
- **Framer Motion** — Smooth animations.
- **Lucide React** — Icon library.

---

## 📝 Notes

- **Form is demo-only.** To enable email submissions, integrate Formspree, EmailJS, or your backend.
- **Dark mode** is the default; toggle persists in `localStorage`.
- **All code is production-ready** and optimized for performance.

---

## 📄 License

Free to use and customize for your personal portfolio.

---

## ❓ Troubleshooting

**Issue: Site not deploying on GitHub Pages**

- Check repo is public or deploy user has Pages enabled.
- Verify `.github/workflows/deploy.yml` exists.
- Go to Actions tab and check for workflow errors.
- In repo Settings → Pages, confirm source is "GitHub Actions".

**Issue: Images not showing after deploy**

- Ensure image paths are relative (e.g., `../assets/image.png`).
- Use ES module imports for images: `import img from '../assets/image.png'`.

**Issue: Dark mode not working after deploy**

- Clear browser cache and localStorage for the site.
- Check that `localStorage` is enabled in your browser.

---

Enjoy your new portfolio! 🎉
