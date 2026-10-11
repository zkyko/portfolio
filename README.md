# Nischal Bhandari — Portfolio

Personal portfolio site. A single static HTML page (CSS and JS inline, no build step) plus a standalone engineering writeup page.

## What's here

- `index.html` — the portfolio itself: hero, agents/systems dossier, stack, contact. All styles and scripts are inline in this one file.
- `engineering-writeup.html` — a standalone article page, linked from the portfolio.
- `fonts/` — self-hosted Space Grotesk and JetBrains Mono (`.woff2`), referenced by `@font-face` rules in `index.html`.
- `resume.pdf` — résumé, linked from the page.

There is no `package.json`, build tool, or bundler — it's plain HTML/CSS/JS served as static files.

## Run locally

Any static file server works, e.g.:

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploy to GitHub Pages

From the repo root:

1. Push to the `zkyko/portfolio` repo's main branch.
2. Enable Pages → Deploy from main branch, root folder.

Or publish directly:

```bash
npx --yes gh-pages -d .
```
