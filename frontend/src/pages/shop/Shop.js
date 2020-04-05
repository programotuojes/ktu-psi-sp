import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import ItemTemplate from './ItemTemplate';
import shopData from './shopData'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
      {ListItemsInGrid(shopData,classes)}
    </>
  );
}

export default Shop;

/*
Method, which lists items in a grid.
Takes in two arguments:
props - array of data.
style - style class.
 */
function ListItemsInGrid(props, style) {
  return(
    <div className={style.root}>
      <GridList className={style.gridList} cellHeight={500} cols={3}>
        {shopData.map((props) => (
          <GridListTile>
            <ItemTemplate image={props.img} title={props.title} price={props.price} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
