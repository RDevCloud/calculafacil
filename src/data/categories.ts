export interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { name: 'Finanzas', slug: 'finanzas', description: 'Calculadoras financieras: porcentajes, préstamos, ahorro e interés compuesto.' },
  { name: 'Fecha y hora', slug: 'fecha-hora', description: 'Conversores de fechas, edades y husos horarios.' },
  { name: 'Utilidades', slug: 'utilidades', description: 'Herramientas prácticas como contador de palabras.' }
];