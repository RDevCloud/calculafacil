export function daysBetween(date1: Date, date2: Date): number {
  const diff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function exactAge(birthDate: Date): { years: number; months: number; days: number } {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }
  return { years, months, days };
}

export function convertCSTtoPST(cstDate: Date): Date {
  // CST es UTC-6, PST es UTC-8 => restar 2 horas
  return new Date(cstDate.getTime() - 2 * 60 * 60 * 1000);
}

export function UTCtoLocal(utcString: string): Date {
  return new Date(utcString + 'Z');
}