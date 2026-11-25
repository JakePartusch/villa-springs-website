import type { APIRoute } from 'astro';
import { publicUrl, xmlHeader } from '../lib/feed';
import { getPublishedPosts, postPath } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  const paths = ['/', '/post/', '/documents/', '/contact/', ...posts.map(({ id }) => postPath(id))];
  const urls = paths.map((path) => `<url><loc>${publicUrl(path, site)}</loc></url>`);
  return new Response(`${xmlHeader}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
