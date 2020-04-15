import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserInformation from './UserInformation';

const title = 'Payment';

function Payment() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <UserInformation />
    </>
  );
}

export default Payment;
