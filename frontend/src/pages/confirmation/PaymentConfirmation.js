import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'Payment Confirmation';

function Confirmation() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/*nzn kodel mygtukas APMOKETI neveikia, failas UserInformation.js*/}
      <h1 style={{ 'justify-content': 'center', 'text-align': 'center' }}>Ačiū, kad pirkote!</h1>
      <meta http-equiv="refresh" content="5;url=/shop" />
    </>
  );
}

export default Confirmation;
