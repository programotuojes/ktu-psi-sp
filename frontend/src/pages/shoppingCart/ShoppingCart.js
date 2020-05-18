import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import img from '../shop/placeholder-image.png';

const title = 'The Wall - Pirkiniai';
const useStyles = makeStyles({
  image: {
    height:'100px',
    display: 'inline'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 'small'
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
});


function ShoppingCart() {
  const classes = useStyles();
  const Header = () => {
    return(
      <Grid container
      alignItems="flex-start" spacing={2}
      style={{borderTop:"2px ridge", backgroundColor:'lightgray', marginBottom:'5px'}}>
        <Grid item xs="2" className={classes.item}>
          
        </Grid>
        <Grid item xs="2" className={classes.headerText}>
          Rūbas ir kaina
        </Grid>
        <Grid item xs="1" className={classes.headerText}>
          Dydis
        </Grid>
        <Grid item xs="1" className={classes.headerText}>
          Kiekis
        </Grid>
        <Grid item xs="2" className={classes.headerText}>
          
        </Grid>
        <Grid item xs="2" className={classes.headerText}>
          Galutinė kaina
        </Grid>
        <Grid item xs="2">
          Šalinti
        </Grid>
      </Grid>
    );
  };
  
  const Item = () => {
    return(
      <Grid container alignItems="flex-start" spacing={2} style={{borderTop:"2px ridge", backgroundColor:'lightgray', display:'flex', flexWrap:'wrap'}}>
        <Grid item xs="2">
          <img src={img} alt="Lorem ipsum" className={classes.image} />
          </Grid>
          <Grid item xs="2" className={classes.text}>
            <Typography variant='body1'>
              Švarkas
            </Typography>
            <Typography variant='body2' style={{fontWeight:'bold'}}>
              15.00 EUR
            </Typography>
          </Grid>
          <Grid item xs="1" className={classes.text}>
            <Typography variant='body1' style={{borderBottom:'1px solid black', backgroundColor:'white'}}>
              S
            </Typography>
          </Grid>
          <Grid item xs="1" className={classes.text}>
            <input
                type='number'
                id={'quantity'}
                pattern='[0-9]{0,2}'
                value={1}
            />
          </Grid>
          <Grid item xs="2">
            
          </Grid>
          <Grid item xs="2" className={classes.text}>
          <Typography variant='body1' style={{fontWeight:'bold'}}>
              15.00 EUR
            </Typography>
          </Grid>
          <Grid item xs="2">
            <DeleteIcon arial='Delete item' style={{color:'#8b0000'}}/>
          </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Container maxWidth="lg">
        <Typography variant="h2" style={{marginBottom:'10px'}}>
          Pirkiniai
        </Typography>
        {Header()}
        {Item()}
      </Container>
    </>
  );
}

export default ShoppingCart;
