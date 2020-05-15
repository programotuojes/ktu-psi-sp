import { createSelector } from 'reselect';

export const getProduct = createSelector(
  (state) => state.productPage.product,
  (product) => product,
);

export const getQuantityForSize = (size) =>
  createSelector(
    (state) => state.productPage.product.itemDetails,
    (details) => {
      if (size) return details.find((detail) => detail.size === size).quantity;
    },
  );

export const getSelectedSize = createSelector(
  (state) => state.productPage.selectedSize,
  (selectedSize) => selectedSize,
);

export const getSelectedQuantity = createSelector(
  (state) => state.productPage.selectedQuantity,
  (selectedQuantity) => selectedQuantity,
);

export const getErrors = createSelector(
  (state) => state.productPage.errors,
  (errors) => errors,
);

export const isLoading = createSelector(
  (state) => state.productPage.loading,
  (loading) => loading,
);
