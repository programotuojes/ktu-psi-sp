import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'The Wall - blogas';

function Blog() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Blogas</h1>
    </>
  );
}

export default Blog;
