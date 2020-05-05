import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography } from '@material-ui/core';

const title = 'Shopping Cart';

function ShoppingCart() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Shopping Cart</h1>

      <Typography variant={'body1'}>
        Content coming soon next sprint. <br></br>
        TODO: <br></br>
        Amount: dynamically calculated
        Total price: dynamically calculated.
      </Typography>
    </>
  );
}

export default ShoppingCart;
