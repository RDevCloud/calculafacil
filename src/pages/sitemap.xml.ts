import type { APIRoute } from 'astro';
import { getAllTools } from '../data/tools';
import { categories } from '../data/categories';

const staticPages = [
  '/',
  '/finanzas/',
  '/fecha-hora/',
  '/utilidades/',
  '/sobre-nosotros/',
  '/contacto/',
  '/privacidad/',
  '/terminos/',
  '/cookies/'
];

function normalizePath(path: string) {
  path = path.trim();

  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;

  return path.replace(/\/{2,}/g, '/');
}

function joinUrl(base: string, path: string) {
  const cleanBase = base.replace(/\/+$/, '');
  const cleanPath = normalizePath(path);
  return `${cleanBase}${cleanPath}`;
}

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href || 'https://calculafacilito.netlify.app').replace(/\/+$/, '');
  const tools = getAllTools();

  const urls = [
    ...staticPages.map((page) => joinUrl(base, page)),
    ...tools.map((tool) => joinUrl(base, tool.url)),
    ...categories.map((cat) => joinUrl(base, cat.slug)),
  ];

  const uniqueUrls = [...new Set(urls)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
