import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import shopData from './shopData';
import ItemGrid from './ItemGrid';

const title = 'Shop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Shop() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {ItemGrid(shopData, classes)}
    </>
  );
}

export default Shop;
