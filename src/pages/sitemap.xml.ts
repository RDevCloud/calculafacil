import type { APIRoute } from 'astro';
import { getAllTools } from '../data/tools';

const BASE = 'https://calculafacilito.netlify.app';

const staticPages: { path: string; priority: string }[] = [
  // Spanish (default)
  { path: '/',                             priority: '1.0' },
  { path: '/finanzas/',                    priority: '0.9' },
  { path: '/fecha-hora/',                  priority: '0.9' },
  { path: '/utilidades/',                  priority: '0.9' },
  { path: '/sobre-nosotros/',              priority: '0.5' },
  { path: '/contacto/',                    priority: '0.5' },
  { path: '/privacidad/',                  priority: '0.4' },
  { path: '/terminos/',                    priority: '0.4' },
  { path: '/cookies/',                     priority: '0.4' },
  // English
  { path: '/en/',                          priority: '0.9' },
  { path: '/en/finance/',                  priority: '0.8' },
  { path: '/en/date-time/',               priority: '0.8' },
  { path: '/en/utilities/',               priority: '0.8' },
  { path: '/en/about/',                   priority: '0.4' },
  { path: '/en/contact/',                 priority: '0.4' },
  { path: '/en/privacy/',                 priority: '0.3' },
  { path: '/en/terms/',                   priority: '0.3' },
  { path: '/en/cookies/',                 priority: '0.3' },
];

const enToolPaths: Record<string, string> = {
  'porcentaje':       '/en/finance/percentage/',
  'descuento':        '/en/finance/discount/',
  'interes-compuesto':'/en/finance/compound-interest/',
  'cuota-prestamo':   '/en/finance/loan-payment/',
  'ahorro-mensual':   '/en/finance/monthly-savings/',
  'dias-entre-fechas':'/en/date-time/days-between-dates/',
  'edad-exacta':      '/en/date-time/exact-age/',
  'cst-a-pst':        '/en/date-time/cst-to-pst/',
  'utc-a-hora-local': '/en/date-time/utc-to-local/',
  'contador-palabras':'/en/utilities/word-counter/',
};

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href || `${BASE}/`).replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];
  const tools = getAllTools();

  const entries = [
    ...staticPages.map(({ path, priority }) =>
      `\n  <url><loc>${base}${path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
    ),
    // Spanish tool pages
    ...tools.map(tool =>
      `\n  <url><loc>${base}${tool.url}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
    ),
    // English tool pages
    ...tools.map(tool => {
      const enPath = enToolPaths[tool.slug];
      return enPath
        ? `\n  <url><loc>${base}${enPath}</loc><lastmod>${today}</lastmod><priority>0.7</priority></url>`
        : '';
    }).filter(Boolean),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};