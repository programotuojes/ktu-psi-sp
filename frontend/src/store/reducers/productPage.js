import {
  LOADING_PRODUCT,
  SELECT_QUANTITY,
  SELECT_SIZE,
  SET_ERROR,
  SET_PRODUCT,
} from '../actionTypes';

const initialState = {
  product: {
    id: '',
    title: '',
    description: '',
    price: '',
    pictures: [{ url: '' }],
    itemDetails: [
      {
        size: '',
        quantity: '',
      },
    ],
  },
  selectedSize: '',
  selectedQuantity: 1,
  errors: {},
  loading: true,
};

export default function productPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.product,
        errors: {},
        loading: false,
      };

    case SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.size,
        errors: {},
      };

    case SELECT_QUANTITY:
      return {
        ...state,
        selectedQuantity: action.quantity,
        errors: {},
      };

    case SET_ERROR:
      return {
        ...state,
        errors: {
          [action.field]: action.message,
        },
        loading: false,
      };

    case LOADING_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
