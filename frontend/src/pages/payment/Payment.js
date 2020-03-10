import React from 'react';
import { Helmet } from 'react-helmet';
import UserInformation from './UserInformation';

const title = 'Payment';

function Payment() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>PaymentPage</h1>
      <UserInformation/>
    </>
  );
}

export default Payment;