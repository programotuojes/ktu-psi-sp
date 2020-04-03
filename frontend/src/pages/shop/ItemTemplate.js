import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
  },
  media: {
    height: 300,
    width: 250,
    margin: 20,
  },
  cardContent: {
    paddingTop: 8,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});

function ItemTemplate({ image, title, price }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" color="textSecondary" align="center">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          {formatPrice(price)}
        </Typography>
      </CardContent>
    </Card>
  );
}

function formatPrice(price) {
  return new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(price / 100);
}
export default ItemTemplate;
