# Nischal Bhandari — Portfolio

Personal portfolio site: systems lab visual direction, single-page layout.

## Run locally

```bash
cd /home/azureuser/portfolio
python3 -m http.server 4173
```

Open http://localhost:4173

## Deploy to GitHub Pages

From this folder (or push to a `portfolio` / `docs` branch):

1. Create/use repo `zkyko/portfolio` (or replace `PortfolioV2`).
2. Push `index.html`, `styles.css`, `script.js`.
3. Enable Pages → Deploy from main branch root.

Or:

```bash
cd /home/azureuser/portfolio
npx --yes gh-pages -d .
```
