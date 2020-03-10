import React from 'react';
import { Helmet } from 'react-helmet';
import ImageButton from './ImageButton';
import blogLogo from './blogLogo.png';
import shopLogo from './shopLogo.jpg';
import Grid from '@material-ui/core/Grid';

const title = 'Homepage';

function Homepage() {

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Homepage</h1>
        <Grid container spacing={2}>
                <ImageButton image={blogLogo} url={"/blog"} />
                <ImageButton image={shopLogo} url={"/shop"} />
        </Grid>
    </>
  );
}
export default Homepage;
