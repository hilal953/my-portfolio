# Production Setup — Complete

All production items are configured. No manual PNG uploads required.

## What is done

| Item | Location | Status |
|------|----------|--------|
| Favicon | `app/icon.svg` | Done |
| Apple touch icon | `app/apple-icon.tsx` (auto-generated PNG) | Done |
| Social preview (OG) | `app/opengraph-image.tsx` (1200×630) | Done |
| Twitter preview | `app/twitter-image.tsx` | Done |
| SEO metadata | `app/layout.tsx` | Done |
| Site config (single source) | `lib/site.ts` | Done |
| Robots.txt | `app/robots.ts` → `/robots.txt` | Done |
| Sitemap | `app/sitemap.ts` → `/sitemap.xml` | Done |
| PWA manifest | `public/manifest.json` | Done |
| Google verification | `public/google21cb3952e9841b4b.html` | Done |

## Live URLs

- **Site:** https://hilalsafwan.vercel.app
- **GitHub:** https://github.com/hilal953/my-portfolio
- **Robots:** https://hilalsafwan.vercel.app/robots.txt
- **Sitemap:** https://hilalsafwan.vercel.app/sitemap.xml
- **Manifest:** https://hilalsafwan.vercel.app/manifest.json

## Deploy workflow

```powershell
npm run build          # verify locally first
git add .
git commit -m "your message"
git push               # Vercel auto-deploys from main
```

## Optional: custom domain

1. Vercel → Project → Settings → Domains → add your domain
2. Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
3. Or edit `lib/site.ts` default URL

## Test after deploy

1. [opengraph.xyz](https://www.opengraph.xyz/) — paste your URL
2. [Google Search Console](https://search.google.com/search-console) — submit sitemap
3. Browser tab — confirm **H** favicon appears
