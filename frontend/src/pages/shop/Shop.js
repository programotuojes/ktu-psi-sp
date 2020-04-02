import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';

const title = 'Shop';

function Shop() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Sidebar />

      <h1>Shop</h1>
    </>
  );
}

export default Shop;
