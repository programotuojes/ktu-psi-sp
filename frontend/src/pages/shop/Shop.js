import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';
import ItemTemplate from './ItemTemplate';
import shopData from './shopData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getCategory } from '../../store/selectors/sidebar';
import makeStyles from '@material-ui/core/styles/makeStyles';

const title = 'Shop';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  categoryLabel: {
    fontSize: '2em',
    margin: '32px',
    fontStyle: 'italic',
  },
});

function Shop() {
  const classes = useStyles();

  const category = useSelector(getCategory);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Sidebar />

      <Typography align={'center'} className={classes.categoryLabel}>
        {category.name}
      </Typography>

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
