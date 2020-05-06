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
    maxHeight: '100%'
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
  img: {
    height:'100vh',
    width: 'auto',
    position: 'absolute',
  },
  Grid: {
    height: '100vh',
    position: 'absolute'
  }
});

function Homepage() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
        <Grid container 
              spacing={0}
              alignItems="stretch"
              justify="space-between"
              style={{height:'auto'}}
              >
                <Grid item xs={12} sm={6}>
                  <ImageButton image={blogLogo} url={'/blog'} text={''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ImageButton
                  image={shopLogo}
                  url={'/shop'}
                  text={''}
                  style={classes.img}
                  />
                </Grid>
        </Grid>
    
    </>
  );
}
export default Homepage;
