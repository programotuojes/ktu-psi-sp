import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'Shopping Cart';

function ShoppingCart() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Shopping Cart</h1>
    </>
  );
}

export default ShoppingCart;
