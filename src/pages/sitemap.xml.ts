import type { APIRoute } from 'astro';
import { getAllTools } from '../data/tools';

// Páginas estáticas con su prioridad
const staticPages: { path: string; priority: string }[] = [
  { path: '/',                  priority: '1.0' },
  { path: '/finanzas/',         priority: '0.9' },
  { path: '/fecha-hora/',       priority: '0.9' },
  { path: '/utilidades/',       priority: '0.9' },
  { path: '/sobre-nosotros/',   priority: '0.5' },
  { path: '/contacto/',         priority: '0.5' },
  { path: '/privacidad/',       priority: '0.4' },
  { path: '/terminos/',         priority: '0.4' },
  { path: '/cookies/',          priority: '0.4' },
];

export const GET: APIRoute = async ({ site }) => {
  // Elimina la barra final del base para evitar doble //
  const base = (site?.href || 'https://calculafacilito.netlify.app/').replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];
  const tools = getAllTools();

  const entries = [
    // Páginas estáticas
    ...staticPages.map(({ path, priority }) =>
      `\n  <url><loc>${base}${path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
    ),
    // Páginas de herramientas
    ...tools.map(tool =>
      `\n  <url><loc>${base}${tool.url}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
