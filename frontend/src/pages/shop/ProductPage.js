import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { formatPrice, productQuantityError, productSizeError } from '../../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import {
  getErrors,
  getProduct,
  getQuantityForSize,
  getSelectedQuantity,
  getSelectedSize,
  isLoading,
} from '../../store/selectors/productPage';
import {
  fetchProduct,
  selectQuantity,
  selectSize,
  setError,
} from '../../store/actions/productPage';
import ErrorBox from '../../components/ErrorBox';
import { PRODUCT_ERROR, QUANTITY_ERROR, SIZE_ERROR } from '../../utils/constants';
import LoadingCircle from '../../components/LoadingCircle';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: '2em',
    margin: 40,
  },
  description: {
    margin: '0px 30px 50px',
  },
  gallery: {
    margin: '0px 16px 16px',
  },
  sizeForm: {
    minWidth: 65,
    margin: 8,
  },
  quantityForm: {
    width: 65,
    margin: 8,
  },
  basketButton: {
    width: 145,
  },
});

function ProductPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const product = useSelector(getProduct);
  const selectedSize = useSelector(getSelectedSize);
  const selectedQuantity = useSelector(getSelectedQuantity);
  const quantityForSize = useSelector(getQuantityForSize(selectedSize));
  const errors = useSelector(getErrors);
  const loading = useSelector(isLoading);

  function parsePictures() {
    let pictures = [];
    product.pictures.forEach((item) => pictures.push({ original: item.url, thumbnail: item.url }));
    return pictures;
  }

  function onSizeChange(event) {
    dispatch(selectSize(event.target.value));
  }

  function onQuantityChange(event) {
    dispatch(selectQuantity(event.target.value));
  }

  function validate() {
    const sizeError = productSizeError(selectedSize);
    const quantityError = productQuantityError(selectedQuantity, quantityForSize);

    if (sizeError) {
      dispatch(setError(SIZE_ERROR, sizeError));
      return false;
    }

    if (quantityError) {
      dispatch(setError(QUANTITY_ERROR, quantityError));
      return false;
    }

    return true;
  }

  function submit() {
    if (validate()) setSnackbarOpen(true);
  }

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={2000}
        message={'Pirkinys pridėtas į krepšelį'}
      />

      {(loading && <LoadingCircle />) ||
        (!errors[PRODUCT_ERROR] && (
          <>
            <Helmet>
              <title>{product.title}</title>
            </Helmet>

            <Typography className={classes.title} align={'center'}>
              {product.title}
            </Typography>

            <Grid container direction={'row'} justify={'center'} style={{ marginBottom: 70 }}>
              <Grid item sm={3} className={classes.gallery}>
                <ImageGallery items={parsePictures()} showPlayButton={false} />
              </Grid>

              <Grid item sm={6} container direction={'column'} alignItems={'center'}>
                <Typography className={classes.description}>{product.description}</Typography>
                <Typography>{formatPrice(product.price)}</Typography>

                <Grid container justify={'center'}>
                  <FormControl className={classes.sizeForm} error={Boolean(errors[SIZE_ERROR])}>
                    <InputLabel id={'size-label'}>Dydis</InputLabel>
                    <Select value={selectedSize} onChange={onSizeChange} labelId={'size-label'}>
                      {product.itemDetails.map((details, index) => (
                        <MenuItem value={details.size} key={index}>
                          {details.size}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors[SIZE_ERROR]}</FormHelperText>
                  </FormControl>

                  <TextField
                    className={classes.quantityForm}
                    label={'Kiekis'}
                    type={'number'}
                    value={selectedQuantity}
                    onChange={onQuantityChange}
                    inputProps={{ step: 1, min: 1 }}
                    error={Boolean(errors[QUANTITY_ERROR])}
                    helperText={errors[QUANTITY_ERROR]}
                    FormHelperTextProps={{ style: { width: 120 } }}
                  />
                </Grid>

                <Button className={classes.basketButton} variant={'contained'} onClick={submit}>
                  Į krepšelį
                </Button>
              </Grid>
            </Grid>
          </>
        )) || <ErrorBox message={errors[PRODUCT_ERROR]} />}
    </>
  );
}

export default ProductPage;
