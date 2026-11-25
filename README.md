# Villa Springs

A static Astro website for the Villa Springs Owners Association. No client-side JavaScript or server runtime is required.

## Run locally

Use Node.js 24 (`nvm use`), then run:

```sh
npm ci
npm run dev
```

Run `npm run build` to generate `dist/` and `npm run preview` to preview the result.

## Update content

- **News and events:** add or edit Markdown files in `src/content/posts/`. The filename is the existing or new post URL under `/post/`.
- **Community information, board members, and dues:** edit the Markdown files in `src/content/pages/`.
- **PDFs and images:** replace or add files in `public/img/`. Keep existing filenames when replacing a document so existing links continue to work.

## Deploy

Netlify builds the site with `npm run build` and publishes `dist/`. Keep [Netlify Forms detection](https://docs.netlify.com/manage/forms/setup/#automatic-form-detection) enabled on the site. The form retains the name `contact`; actual submission handling requires Netlify and does not run in local previews.

`SITE_URL` can set the canonical origin for feeds and the sitemap. Netlify’s `URL` is used when `SITE_URL` is not set.
