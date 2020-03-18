import React from 'react';
import {Helmet} from 'react-helmet';
import ImageButton from './ImageButton';
import blogLogo from './blogLogo.png';
import shopLogo from './shopLogo.jpg';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

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
});

function Homepage() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Homepage</h1>
      <Grid container spacing={2}>
        <ImageButton image={blogLogo} url={'/blog'} text={'Blogas'} style={classes.blog_header} />
        <ImageButton image={shopLogo} url={'/shop'} text={'E-parduotuvė'} style={classes.shop_header}
        />
      </Grid>
    </>
  );
}
export default Homepage;
