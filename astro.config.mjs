import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || process.env.URL,
  output: 'static',
  trailingSlash: 'always',
});
