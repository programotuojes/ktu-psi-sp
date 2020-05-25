import React from 'react';
import Grid from '@material-ui/core/Grid';
import placeholder from '../shop/placeholder-image.png';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { formatPrice, removeItem, updateQuantity, updateSize } from '../../utils/util';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  sizeForm: {
    minWidth: 65,
    margin: 8,
  },
  quantityForm: {
    width: 65,
    margin: 8,
  },
});

function CartListItem({ product, rerender }) {
  const classes = useStyles();

  function onSizeChange(event) {
    updateSize(product.id, product.selectedSize, event.target.value);
    rerender();
  }

  function onQuantityChange(event) {
    updateQuantity(product.id, product.selectedSize, event.target.value);
    rerender();
  }

  function onDelete() {
    removeItem(product.id, product.selectedSize);
    rerender();
  }

  return (
    <Grid container justify={'center'} alignItems={'center'} spacing={2}>
      <Grid item sm={2} container justify={'center'}>
        <img
          src={product.image}
          alt={'Foto'}
          onError={(event) => {
            event.target.onerror = null;
            event.target.src = placeholder;
          }}
          width={'80'}
          height={'90'}
        />
      </Grid>

      <Grid item sm={3} container direction={'column'}>
        <Typography className={classes.title}>{product.title}</Typography>

        <Typography>{formatPrice(product.price)}</Typography>
      </Grid>

      <Grid item sm={2} container justify={'flex-end'}>
        <FormControl className={classes.sizeForm}>
          <InputLabel id={'size-label'}>Dydis</InputLabel>
          <Select value={product.selectedSize} onChange={onSizeChange} labelId={'size-label'}>
            {product.itemDetails.map((details, index) => (
              <MenuItem value={details.size} key={index}>
                {details.size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={2} container justify={'flex-start'}>
        <TextField
          className={classes.quantityForm}
          label={'Kiekis'}
          type={'number'}
          value={product.selectedQuantity}
          onChange={onQuantityChange}
          inputProps={{ step: 1, min: 1, max: 10 }}
          error={Boolean(product.quantityError)}
          helperText={product.quantityError}
          FormHelperTextProps={{ style: { width: 120 } }}
        />
      </Grid>

      <Grid item sm={2} container direction={'column'}>
        <Typography align={'center'}>Iš viso</Typography>
        <Typography align={'center'}>
          {formatPrice(product.price * product.selectedQuantity)}
        </Typography>
      </Grid>

      <Grid item sm={1} container justify={'center'}>
        <IconButton onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CartListItem;
