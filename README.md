# Gian Ferre — bio site

Astro static site. Deploys to GitHub Pages at `https://gianf27.github.io/bio/`.

```sh
npm install
npm run dev      # localhost:4321/bio/
npm run build    # ./dist/
npm run preview
```

## Where the content lives

- `src/pages/index.astro` — About. Hero, what I do, what I'm looking for, education.
- `src/data/projects.json` — PC builds and games. Edit this file, not the page.
- `src/pages/experience.astro` — jobs, skills, certifications, activities. The `jobs` array at the top of the file.
- `src/pages/contact.astro` — the `links` array at the top of the file.
- `public/GianFerre-Resume.pdf` — copied from `../resume/gian-one-pager/GFerre-Resume.pdf`. Recopy it whenever the resume changes.

Search for `TODO` before publishing. Every placeholder is marked.

## Adding a headshot

Drop the image at `src/assets/headshot.jpg`, then uncomment the import and the
`<Image>` block in `src/pages/index.astro`.

## Deploying

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
In the repo settings, set Pages source to **GitHub Actions**.

If the repo is not named `bio`, change `base` in `astro.config.mjs` to match, and
change `site` to the right GitHub Pages host.
