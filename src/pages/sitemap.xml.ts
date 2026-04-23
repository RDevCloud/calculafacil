import type { APIRoute } from 'astro';
import { getAllTools } from '../data/tools';
import { categories } from '../data/categories';

const staticPages = [
  '', '/finanzas/', '/fecha-hora/', '/utilidades/',
  '/sobre-nosotros/', '/contacto/', '/privacidad/', '/terminos/', '/cookies/'
];

export const GET: APIRoute = async ({ site }) => {
  const base = site?.href || 'https://calculafacilito.netlify.app/';
  const tools = getAllTools();
  const urls = [
    ...staticPages.map(page => `${base}${page}`),
    ...tools.map(tool => `${base}${tool.url}`),
    ...categories.map(cat => `${base}${cat.slug}/`)
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `<url><loc>${url}</loc><priority>0.8</priority></url>`).join('')}
</urlset>`;
  return new Response(sitemap, { headers: { 'Content-Type': 'application/xml' } });
};