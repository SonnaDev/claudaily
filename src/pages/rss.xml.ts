import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Claudaily | The Independent Claude AI Chronicle & Guides',
    description: "An independent English-language blog dedicated exclusively to Claude (Anthropic's AI assistant).",
    site: context.site || 'https://claudaily.vercel.app',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.data.category === 'news' ? 'news' : 'tutorials'}/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
