import { createSelector } from 'reselect';

export const isSidebarOpen = createSelector(
  (state) => state.sidebar.open,
  (open) => open,
);
