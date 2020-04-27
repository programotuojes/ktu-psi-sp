import React from 'react';
import { Helmet } from 'react-helmet-async';
import ImageButton from './ImageButton';
import blogLogo from './blogLogo.png';
import shopLogo from './shopLogo.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const title = 'Homepage';

const useStyles = makeStyles({
  blog_header: {
    position: 'absolute',
    top: '70%',
    left: '23%',
    color: 'orange',
    'font-family': 'Georgia, serif',
    'font-style': 'italic',
    'letter-spacing': '1px',
    'font-size': '53px',
    'text-shadow': '-6px 0 black, 0 3px black, 1px 0 black, 0 -3px black',
  },

  shop_header: {
    position: 'absolute',
    top: '70%',
    left: '66%',
    color: 'grey',
    'font-family': 'Georgia, serif',
    'font-style': 'italic',
    'letter-spacing': '1px',
    'font-size': '53px',
    'text-shadow': '-5px 0 black, 0 2px black, 1px 0 black, 0 -3px black',
  },

  shop_image: {
    height: '100%',
    width: '50%',
  },

  blog_image: {
    height: '100%',
    width: '50%',
  },
});

function Homepage() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Grid container spacing={2}>
        <ImageButton
          url={'/blog'}
          image={blogLogo}
          imageStyle={classes.blog_image}
          text={'Blogas'}
          textStyle={classes.blog_header}
        />
        <ImageButton
          url={'/shop'}
          image={shopLogo}
          image
          Style={classes.shop_image}
          text={'E-parduotuvė'}
          textStyle={classes.shop_header}
        />
      </Grid>
    </>
  );
}
export default Homepage;
