import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 300,
    width: 250,
  },
});

function ItemTemplate(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} title={props.title} />
      </CardActionArea>
      <CardContent>
        <Typography variant="body1" color="textSecondary" align="center">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h6" align="center">
          {FormatPrice(props.price)}
        </Typography>
      </CardContent>
    </Card>
  );
}

function FormatPrice(price) {
  return new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(price);
}
export default ItemTemplate;
