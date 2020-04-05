import { createSelector } from 'reselect';

export const isSidebarOpen = createSelector(
  (state) => state.sidebar.open,
  (open) => open,
);

export const getCategory = createSelector(
  (state) => state.sidebar.category,
  (category) => category,
);
