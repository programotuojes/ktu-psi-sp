import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { formatPrice } from '../../utils/util';

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
    margin: 25,
  },
  media: {
    height: 300,
    width: 250,
    margin: 5,
  },
  cardContent: {
    paddingTop: 8,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});

function ItemTemplate({ product }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea onClick={() => history.push(`/shop/product/${product.id}`)}>
        <CardMedia className={classes.media} image={product.image} title={product.title} />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" color="textSecondary" align="center">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          {formatPrice(product.price)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemTemplate;
