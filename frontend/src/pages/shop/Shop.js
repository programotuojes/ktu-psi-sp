import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import shopData from './shopData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ItemTemplate from './ItemTemplate';

const title = 'Shop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Shop() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={classes.root} align={'center'}>
        <GridList className={classes.gridList} cellHeight={500} cols={3}>
          {shopData.map((props) => (
            <GridListTile>
              <ItemTemplate image={props.img} title={props.title} price={props.price} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default Shop;
