import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'Payment Confirmation';

function Confirmation() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Payment Confirmation</h1>
    </>
  );
}

export default Confirmation;
