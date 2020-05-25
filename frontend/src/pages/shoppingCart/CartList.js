import React from 'react';
import CartListItem from './CartListItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    marginTop: 80,
  },
  paper: {
    padding: 16,
    margin: 8,
  },
});

function CartList({ cart, rerender }) {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.paper}>
      {cart.length !== 0 && (
        <>
          <Divider />
          {cart.map((item, index) => (
            <>
              <CartListItem product={item} rerender={rerender} key={index} />
              <Divider />
            </>
          ))}
        </>
      )}
    </Paper>
  );
}

export default CartList;
