import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CartList from './CartList';
import { formatPrice, getCart, getTotalPrice, validateCartQuantities } from '../../utils/util';
import Typography from '@material-ui/core/Typography';
import { Button, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  pageTitle: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: '2em',
  },
  paper: {
    padding: 16,
    margin: 8,
  },
  totalPrice: {
    fontSize: '1.2em',
  },
  emptyMessage: {
    marginTop: 30,
    fontSize: '1.25em',
  },
});

function ShoppingCart() {
  document.title = 'Pirkinių krepšelis';

  const classes = useStyles();
  const history = useHistory();

  const [, setUpdate] = useState({});
  const cart = getCart();

  function rerender() {
    setUpdate({});
  }

  function submit() {
    // TODO don't let user simply navigate to /payment without verifying their cart
    if (validateCartQuantities()) history.push('/payment');
    rerender();
  }

  return (
    <>
      <Typography className={classes.pageTitle} align={'center'}>
        Krepšelis
      </Typography>

      {(cart.length !== 0 && (
        <Grid container justify={'center'}>
          <Grid item sm={7}>
            <CartList cart={cart} rerender={rerender} />
          </Grid>

          <Grid item sm={2} xs={6}>
            <Paper elevation={4} className={classes.paper}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container>
                  <Grid item xs>
                    <Typography className={classes.totalPrice} align={'left'}>
                      Iš viso
                    </Typography>
                  </Grid>

                  <Grid item xs>
                    <Typography className={classes.totalPrice} align={'right'}>
                      {formatPrice(getTotalPrice())}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Divider />
                </Grid>

                <Grid item container justify={'center'}>
                  <Button variant={'contained'} onClick={submit}>
                    Mokėti
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )) || (
        <Typography className={classes.emptyMessage} align={'center'}>
          Pirkinių krepšelis tuščias
        </Typography>
      )}
    </>
  );
}

export default ShoppingCart;
