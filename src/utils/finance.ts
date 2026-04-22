export function calculatePercentage(value: number, percent: number): number {
  return (value * percent) / 100;
}

export function calculateDiscount(price: number, discountPercent: number): number {
  return price - (price * discountPercent) / 100;
}

export function compoundInterest(principal: number, rate: number, years: number, compoundPerYear = 1): number {
  return principal * Math.pow(1 + rate / (100 * compoundPerYear), compoundPerYear * years);
}

export function loanPayment(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}

export function monthlySavings(target: number, years: number, annualRate: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return target / months;
  return (target * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
}