import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';
import ItemTemplate from './ItemTemplate';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getCategory } from '../../store/selectors/sidebar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { get, GET_PRODUCTS_IN_CATEGORY } from '../../utils/network';
import { Container } from '@material-ui/core';

const title = 'Shop';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  categoryLabel: {
    fontSize: '2em',
    margin: '32px',
    fontStyle: 'bold',
    fontFamily: 'Open Sans'
  },
});

function Shop() {
  const classes = useStyles();

  const category = useSelector(getCategory);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    get(GET_PRODUCTS_IN_CATEGORY(category.id), setProducts);
  }, [category]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Sidebar />
      <Container maxWidth="xl">
        <Typography align={'center'} className={classes.categoryLabel}>
          {category.name}
        </Typography>

        <div className={classes.root} align={'center'}>
          <GridList className={classes.gridList} cellHeight={500} cols={3}>
            {products.map((product) => (
              <GridListTile key={product.id}>
                <ItemTemplate product={product} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </>
  );
}

export default Shop;
