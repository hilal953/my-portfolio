# Hilal Safwan — Portfolio

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

**Live site:** [https://hilalsafwan.vercel.app](https://hilalsafwan.vercel.app)  
**GitHub:** [https://github.com/hilal953/my-portfolio](https://github.com/hilal953/my-portfolio)

---

## Quick start (VS Code)

Open this folder in VS Code, then in the terminal:

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Commands you will use

| Command | What it does |
|---------|--------------|
| `npm run dev` | Run locally for development |
| `npm run build` | Test production build (run before deploy) |
| `npm run start` | Run production build locally |
| `npm run lint` | Check for code issues |

---

## Project structure

```
app/
  page.tsx              ← Main portfolio page (all sections)
  layout.tsx            ← SEO metadata, fonts, site config
  icon.svg              ← Browser tab favicon
  apple-icon.tsx        ← iOS home screen icon (auto-generated)
  opengraph-image.tsx   ← Social media preview image (auto-generated)
  twitter-image.tsx     ← Twitter/X preview image
  robots.ts             ← Search engine crawling rules
  sitemap.ts            ← XML sitemap for Google
components/
  StoryToggle.tsx       ← Expand/collapse "My Story" section
lib/
  site.ts               ← Site URL, title, description (edit here)
public/
  manifest.json         ← PWA manifest
  google21cb3952e9841b4b.html  ← Google Search Console verification
```

---

## How to change your site URL or social links

Edit **`lib/site.ts`** — one file for site name, description, Twitter handle, and URL.

If you add a custom domain later, set it in Vercel and update:

```ts
// lib/site.ts
export const siteUrl = "https://yourdomain.com";
```

Or add a Vercel environment variable: `NEXT_PUBLIC_SITE_URL`

---

## Deploy to Vercel (already set up)

Your repo is connected to Vercel. Every push to `main` auto-deploys.

### To publish changes:

```powershell
git add .
git commit -m "Describe your change"
git push
```

Wait ~1 minute, then check [https://hilalsafwan.vercel.app](https://hilalsafwan.vercel.app)

### First-time Vercel setup (if needed)

1. Go to [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New → Project** → import `hilal953/my-portfolio`
3. Click **Deploy** (no config changes needed)

---

## SEO checklist (already configured)

- [x] Page title and description
- [x] Open Graph tags (Facebook, LinkedIn previews)
- [x] Twitter/X card with preview image
- [x] Favicon and Apple touch icon
- [x] `robots.txt` at `/robots.txt`
- [x] Sitemap at `/sitemap.xml`
- [x] Google Search Console verification file
- [x] PWA manifest at `/manifest.json`

### Test your social preview

After deploying, paste your URL into:
- [opengraph.xyz](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://hilalsafwan.vercel.app`
3. Verify using the HTML file method (file already in `/public`)
4. Submit sitemap: `https://hilalsafwan.vercel.app/sitemap.xml`

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm: command not found` | Install Node.js from [nodejs.org](https://nodejs.org), restart VS Code |
| Port 3000 in use | Run `npm run dev -- -p 3001` |
| Build fails | Run `npm run build` and read the error message |
| Changes not on live site | Run `git push` and wait for Vercel deploy |
| Favicon not updating | Hard refresh: Ctrl+Shift+R, or clear browser cache |

---

© 2026 Hilal Safwan. Still building. Still believing.
