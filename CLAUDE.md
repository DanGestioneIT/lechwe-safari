# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Pure static website (zero build step, zero framework) for **Lechwe Safari**, a Ugandan safari agency. HTML + CSS + Vanilla JS only.

**Live site:** https://dangestioneit.github.io/lechwe-safari/  
**GitHub repo:** https://github.com/DanGestioneIT/lechwe-safari

## Deploying changes

```bash
./deploy.sh "Description of the change"
```

This stages all files, commits, and pushes to `origin/main`. GitHub Pages rebuilds automatically within 30–60 seconds.

## Architecture

The site is **data-driven with no backend**. Two JS files act as the database:

- **`js/tours-data.js`** — defines a `TOURS` object (16 packages keyed by slug) and exposes:
  - `getTourById(id)` → single tour object
  - `getToursByCountry(country)` → filtered array
- **`js/blog-data.js`** — defines a `BLOG_POSTS` array (10 articles) and exposes:
  - `getBlogPostById(id)` → single post object

**`tour.html`** and **`post.html`** are shared templates: they read `?id=` from the URL and render the matching data at runtime. There are no separate HTML files per tour or per article.

**`js/components.js`** renders the shared header, footer, and WhatsApp float via `initPage(depth)`, called at the bottom of every page. The `depth` argument (0 for root pages, never needed here) controls relative path prefixes.

## Configuration values (all in `js/components.js`, top of file)

| Constant | Current value | Notes |
|---|---|---|
| `WA_NUMBER` | `+256760288509` | Used for WhatsApp float and `wa.me/` links |
| `IMG_BASE` | `https://keithassociatesug.com/lechwesafari.com/wp-content/uploads/2026/05/` | All tour and blog images point here (WordPress CDN) |

When the client's WordPress site goes offline, update `IMG_BASE` here and the hardcoded image URLs inside `tours-data.js` and `blog-data.js`.

## Design system (`css/style.css`)

CSS custom properties at `:root`:
- `--forest` `#1C3829` / `--gold` `#C9974A` / `--cream` `#F7F3EC` — primary palette
- `--font-display`: Playfair Display (headings) / `--font-body`: Nunito Sans (body)
- `.btn-forest`, `.btn-gold`, `.btn-outline-dark` — button variants

## Pending items (as of May 2026)

- **Email address** — shown as `TBD` in footer and contact page. Update in `js/components.js` (footer template) and `contact.html` (contact detail block).
- **Tour prices** — `price` field is absent from all TOURS objects. Add it per tour in `tours-data.js` and display it in the sidebar in `tour.html`.
- **Social media links** — footer links (`f`, `in`, `X`) point to `#`. Replace with real URLs in `js/components.js` footer template.
- **Images** — currently served from the client's WordPress installation. Will break if that domain goes offline.

## Formspree (contact form)

Form ID `mlgzkawn` — credentials stored locally in `formspree.md` (gitignored). Free plan: 50 submissions/month. Submissions are forwarded to `dan.gestione.it@gmail.com`.
