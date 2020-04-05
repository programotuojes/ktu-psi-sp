import React from 'react';
import { Helmet } from 'react-helmet-async';

const title = 'Blog';

function Blog() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Blog</h1>
    </>
  );
}

export default Blog;
