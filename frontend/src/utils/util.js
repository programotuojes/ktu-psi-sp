export function formatPrice(price) {
  return new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(price / 100);
}
