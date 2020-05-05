import { CATEGORIES } from '../../util/constants.js';
import { TOGGLE_SIDEBAR, SELECT_CATEGORY } from '../actionTypes';

const initialState = {
  open: false,
  category: CATEGORIES[0],
};

export default function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        open: action.open,
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        open: false,
        category: action.category,
      };

    default:
      return state;
  }
}
