import React from 'react';
import { Helmet } from 'react-helmet';
import ImageButton from './ImageButton';
import blogLogo from './blogLogo.png';
import shopLogo from './shopLogo.jpg';


const title = 'Homepage';

function Homepage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Homepage</h1>
      <ImageButton image={blogLogo} />
    </>
  );
}

export default Homepage;
