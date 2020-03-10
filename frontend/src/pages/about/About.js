import React from 'react';
import { Helmet } from 'react-helmet';

const title = 'About';

function About() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>About page</h1>
    </>
  );
}

export default About;
