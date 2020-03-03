import React from 'react';
import { Helmet } from 'react-helmet';

const title = 'Homepage';

function Homepage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Homepage</h1>
    </>
  );
}

export default Homepage;
