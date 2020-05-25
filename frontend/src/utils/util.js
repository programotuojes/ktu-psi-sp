import { SHOPPING_CART } from './constants';

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

  if (selectedQuantity > quantityForSize) {
    return `Šio dydžio sandėlyje turime ${quantityForSize} vnt.`;
  }

  if (selectedQuantity < 1) {
    return 'Kiekis turi būti ne mažesnis nei 1';
  }

  if (selectedQuantity > 10) {
    return 'Kiekis turi ne didesnis nei 10';
  }

  if (selectedQuantity % 1 !== 0) {
    return 'Kiekis turi būti sveikas skaičius';
  }

  return false;
}

export function isStorageAvailable() {
  let storage;

  try {
    storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);

    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function addItem(product, size, quantity) {
  if (isStorageAvailable()) {
    let cart = JSON.parse(localStorage.getItem(SHOPPING_CART));

    cart = cart.filter((item) => !(item.id === product.id && item.selectedSize === size));

    cart.push({
      id: product.id,
      title: product.title,
      image: product.pictures[0].url,
      price: product.price,
      itemDetails: product.itemDetails,
      selectedSize: size,
      selectedQuantity: quantity,
    });

    localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));
  }
}

export function updateSize(id, size, newSize) {
  if (isStorageAvailable()) {
    let cart = JSON.parse(localStorage.getItem(SHOPPING_CART));

    cart = cart.map((item) => {
      if (item.id === id && item.selectedSize === size) item.selectedSize = newSize;
      return item;
    });

    function removeDuplicate() {
      for (let i = 0; i < cart.length; i++) {
        for (let j = i + 1; j < cart.length; j++) {
          if (cart[i].id === cart[j].id && cart[i].selectedSize === cart[j].selectedSize) {
            cart[j].selectedQuantity =
              Number(cart[i].selectedQuantity) + Number(cart[j].selectedQuantity);
            cart.splice(i, 1);
            return;
          }
        }
      }
    }

    removeDuplicate();

    localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));
  }
}

export function updateQuantity(id, size, newQuantity) {
  if (isStorageAvailable()) {
    let cart = JSON.parse(localStorage.getItem(SHOPPING_CART));

    cart = cart.map((item) => {
      if (item.id === id && item.selectedSize === size) {
        item.selectedQuantity = newQuantity;
        item.quantityError = undefined;
      }
      return item;
    });

    localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));
  }
}

export function removeItem(id, size) {
  if (isStorageAvailable()) {
    let cart = JSON.parse(localStorage.getItem(SHOPPING_CART));

    cart = cart.filter((item) => !(item.id === id && item.selectedSize === size));

    localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));
  }
}

export function getCart() {
  if (isStorageAvailable()) return JSON.parse(localStorage.getItem(SHOPPING_CART));
  else return [];
}

export function getTotalPrice() {
  if (isStorageAvailable()) {
    const cart = JSON.parse(localStorage.getItem(SHOPPING_CART));
    let sum = 0;

    cart.forEach((item) => {
      sum += item.price * item.selectedQuantity;
    });

    return sum;
  }
}

export function validateCartQuantities() {
  let success = true;

  function getMaxQuantityForSize(product) {
    return product.itemDetails.find((detail) => detail.size === product.selectedSize).quantity;
  }

  if (isStorageAvailable()) {
    let cart = JSON.parse(localStorage.getItem(SHOPPING_CART));

    cart = cart.map((product) => {
      const error = productQuantityError(product.selectedQuantity, getMaxQuantityForSize(product));
      if (error) success = false;
      product.quantityError = error;

      return product;
    });

    localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));
  }

  return success;
}
