import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';
import ItemTemplate from './ItemTemplate';
import img from './jacket1.jpg';
import img2 from './jumper.jpg';
import img3 from './shorts.jpg';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getCategory } from '../../store/selectors/sidebar';
import makeStyles from '@material-ui/core/styles/makeStyles';

const title = 'Shop';

const useStyles = makeStyles({
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
        {category}
      </Typography>

      <ItemTemplate image={img} title={'jacket'} price={2000} />
      <ItemTemplate image={img2} title={'jumper'} price={5005} />
      <ItemTemplate image={img3} title={'shorts'} price={15014} />
    </>
  );
}

export default Shop;
