import {
  LOADING_PRODUCT,
  SELECT_QUANTITY,
  SELECT_SIZE,
  SET_ERROR,
  SET_PRODUCT,
} from '../actionTypes';
import { GET_PRODUCT } from '../../utils/network';
import { PRODUCT_ERROR } from '../../utils/constants';

export function fetchProduct(id) {
  return async (dispatch) => {
    dispatch({ type: LOADING_PRODUCT, loading: true });

    const response = await fetch(GET_PRODUCT(id));

    if (response.ok) {
      dispatch({ type: SET_PRODUCT, product: await response.json() });
    } else {
      dispatch(setError(PRODUCT_ERROR, await response.text()));
    }
  };
}

export function selectSize(size) {
  return {
    type: SELECT_SIZE,
    size,
  };
}

export function selectQuantity(quantity) {
  return {
    type: SELECT_QUANTITY,
    quantity,
  };
}

export function setError(field, message) {
  return {
    type: SET_ERROR,
    field,
    message,
  };
}
