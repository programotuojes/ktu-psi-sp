import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'Shop';

function Shop() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Shop</h1>
    </>
  );
}

export default Shop;