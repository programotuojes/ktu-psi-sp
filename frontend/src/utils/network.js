export const API = 'http://localhost:8080/api';

export const GET_PRODUCTS_IN_CATEGORY = (categoryId) => `${API}/products/category/${categoryId}`;
export const GET_PRODUCT = (productId) => `${API}/products/${productId}`;

export function get(url, setData) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
}
