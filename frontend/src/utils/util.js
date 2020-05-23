export function formatPrice(price) {
  return new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(price / 100);
}

export function productSizeError(selectedSize) {
  if (!selectedSize) {
    return 'Pasirinkite dydį';
  }

  return false;
}

export function productQuantityError(selectedQuantity, quantityForSize) {
  if (!selectedQuantity) {
    return 'Įveskite kiekį';
  }

  if (selectedQuantity < 1) {
    return 'Kiekis turi būti daugiau nei 0';
  }

  if (selectedQuantity >= 10) {
    return 'Kiekis turi ne didesnis nei 10';
  }

  if (selectedQuantity % 1 !== 0) {
    return 'Kiekis turi būti sveikas skaičius';
  }

  if (selectedQuantity > quantityForSize) {
    return `Šio dydžio sandėlyje turime ${quantityForSize} vnt.`;
  }

  return false;
}
