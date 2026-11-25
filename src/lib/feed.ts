import { getPublishedPosts, postPath } from './posts';

export const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
export const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]!);
export const publicUrl = (path: string, site?: URL) => escapeXml(site ? new URL(path, site).href : path);

export async function newsFeed(site?: URL, channelPath = '/post/') {
  const posts = await getPublishedPosts();
  const items = posts.map(({ id, data }) => {
    const url = publicUrl(postPath(id), site);
    return `<item><title>${escapeXml(data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${data.date.toUTCString()}</pubDate><description>${escapeXml(data.description)}</description></item>`;
  });
  return new Response(
    `${xmlHeader}<rss version="2.0"><channel><title>Villa Springs News</title><link>${publicUrl(channelPath, site)}</link><description>Events and updates from Villa Springs</description><language>en-us</language>${items.join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
}
