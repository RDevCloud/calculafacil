export interface Tool {
  name: string;
  slug: string;
  category: string;
  description: string;
  keywords: string[];
  icon: string;
  url: string;
}

const tools: Tool[] = [
  // Finanzas
  { name: 'Calculadora de porcentaje', slug: 'porcentaje', category: 'finanzas', description: 'Calcula porcentajes, aumentos y descuentos fácilmente.', keywords: ['porcentaje', '%', 'tanto por ciento'], icon: '%', url: '/finanzas/porcentaje/' },
  { name: 'Calculadora de descuento', slug: 'descuento', category: 'finanzas', description: 'Averigua el precio final tras aplicar un descuento.', keywords: ['descuento', 'rebaja', 'oferta'], icon: '🏷️', url: '/finanzas/descuento/' },
  { name: 'Interés compuesto', slug: 'interes-compuesto', category: 'finanzas', description: 'Proyecta el crecimiento de una inversión con interés compuesto.', keywords: ['interés compuesto', 'inversión', 'capitalización'], icon: '📈', url: '/finanzas/interes-compuesto/' },
  { name: 'Cuota de préstamo', slug: 'cuota-prestamo', category: 'finanzas', description: 'Calcula la cuota mensual de un préstamo.', keywords: ['préstamo', 'cuota', 'hipoteca'], icon: '🏦', url: '/finanzas/cuota-prestamo/' },
  { name: 'Ahorro mensual', slug: 'ahorro-mensual', category: 'finanzas', description: 'Planifica cuánto ahorrar cada mes para alcanzar una meta.', keywords: ['ahorro', 'meta financiera', 'presupuesto'], icon: '💰', url: '/finanzas/ahorro-mensual/' },
  // Fecha y hora
  { name: 'Días entre fechas', slug: 'dias-entre-fechas', category: 'fecha-hora', description: 'Calcula los días, semanas o meses entre dos fechas.', keywords: ['días entre fechas', 'diferencia de fechas', 'calendario'], icon: '📅', url: '/fecha-hora/dias-entre-fechas/' },
  { name: 'Edad exacta', slug: 'edad-exacta', category: 'fecha-hora', description: 'Calcula tu edad exacta en años, meses y días.', keywords: ['edad', 'cumpleaños', 'años'], icon: '🎂', url: '/fecha-hora/edad-exacta/' },
  { name: 'CST a PST', slug: 'cst-a-pst', category: 'fecha-hora', description: 'Convierte hora de CST (América Central) a PST (Pacífico).', keywords: ['CST', 'PST', 'huso horario'], icon: '🌎', url: '/fecha-hora/cst-a-pst/' },
  { name: 'UTC a hora local', slug: 'utc-a-hora-local', category: 'fecha-hora', description: 'Convierte cualquier hora UTC a tu hora local.', keywords: ['UTC', 'hora local', 'GMT'], icon: '⏰', url: '/fecha-hora/utc-a-hora-local/' },
  // Utilidades
  { name: 'Contador de palabras', slug: 'contador-palabras', category: 'utilidades', description: 'Cuenta palabras, caracteres y oraciones de un texto.', keywords: ['contador de palabras', 'caracteres', 'texto'], icon: '📝', url: '/utilidades/contador-palabras/' }
];

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter(t => t.category === category);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug);
}