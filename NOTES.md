# Movio Dev Notes

## GitHub Pages
- base in vite.config.js must be '/movio/'
- 404.html trick is needed for SPA routing on reload
- Deploy with: npm run deploy

## Moving to Production (Vercel/Netlify)
- Change base to '/'
- Remove public/404.html
- Remove redirect script from index.html
- Just push to main, Vercel auto-deploys