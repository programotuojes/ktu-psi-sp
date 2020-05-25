import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@material-ui/core';

const title = 'Payment Confirmation';

function Confirmation() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/*nzn kodel mygtukas APMOKETI neveikia, failas UserInformation.js*/}
      <Container maxWidth="lg">
        <div
          style={{
            backgroundColor: '#d4edda',
            flex: 1,
            flexWrap: 'wrap',
            border: '5px ridge',
            marginTop: '35px',
          }}
        >
          <h1
            style={{
              'justify-content': 'center',
              'text-align': 'center',

              padding: '20px, 20px, 20px, 20px',
            }}
          >
            Ačiū, kad pirkote! Jūsų užsakymas apdorojamas.
          </h1>
        </div>
      </Container>

      <meta http-equiv="refresh" content="5;url=/shop" />
    </>
  );
}

export default Confirmation;
