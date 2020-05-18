import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'The Wall - Apie';

function About() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Apie The Wall</h1>
    </>
  );
}

export default About;
