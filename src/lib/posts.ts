import { getCollection } from 'astro:content';

export const postPath = (id: string) => `/post/${id}/`;

export async function getPublishedPosts() {
  const now = new Date();
  const posts = await getCollection('posts', ({ data }) => data.date <= now);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeZone: 'America/Chicago',
}).format;
