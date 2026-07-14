export function formatCurrency(
  amount: number,
  locale = "en-IN",
  currency = "INR"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}