import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  img: {
    height: '27%',
    width: '20%',
  },
});

/*https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate/React/Light/*/
function ItemTemplate(props) {
  const classes = useStyles();
  return (
    <div>
      <img src={props.image} className={classes.img} />
      <div>{props.title}</div>
      <div>{FormatPrice(props.value)}</div>
    </div>
  );
}

function FormatPrice(price) {
  return new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(price);
}
export default ItemTemplate;
