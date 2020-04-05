import { TOGGLE_SIDEBAR, SELECT_CATEGORY } from '../actionTypes';

export function toggleSidebar(open) {
  return {
    type: TOGGLE_SIDEBAR,
    open: open,
  };
}

export function selectCategory(selectedCategory) {
  return {
    type: SELECT_CATEGORY,
    category: selectedCategory,
  };
}
