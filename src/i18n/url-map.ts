/**
 * Maps Spanish URLs → English URLs and vice versa.
 * Used for hreflang tags and the language toggle redirect.
 */
export const urlToEn: Record<string, string> = {
  '/':                                    '/en/',
  '/finanzas/':                           '/en/finance/',
  '/finanzas/porcentaje/':               '/en/finance/percentage/',
  '/finanzas/descuento/':                '/en/finance/discount/',
  '/finanzas/interes-compuesto/':        '/en/finance/compound-interest/',
  '/finanzas/cuota-prestamo/':           '/en/finance/loan-payment/',
  '/finanzas/ahorro-mensual/':           '/en/finance/monthly-savings/',
  '/fecha-hora/':                        '/en/date-time/',
  '/fecha-hora/dias-entre-fechas/':      '/en/date-time/days-between-dates/',
  '/fecha-hora/edad-exacta/':            '/en/date-time/exact-age/',
  '/fecha-hora/cst-a-pst/':             '/en/date-time/cst-to-pst/',
  '/fecha-hora/utc-a-hora-local/':       '/en/date-time/utc-to-local/',
  '/utilidades/':                        '/en/utilities/',
  '/utilidades/contador-palabras/':      '/en/utilities/word-counter/',
  '/sobre-nosotros/':                    '/en/about/',
  '/contacto/':                          '/en/contact/',
  '/privacidad/':                        '/en/privacy/',
  '/terminos/':                          '/en/terms/',
  '/cookies/':                           '/en/cookies/',
};

/** Reverse map: English URLs → Spanish URLs */
export const urlToEs: Record<string, string> = Object.fromEntries(
  Object.entries(urlToEn).map(([es, en]) => [en, es])
);
