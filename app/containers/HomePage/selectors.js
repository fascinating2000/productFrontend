/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const selectProducts = () => createSelector(
  selectHome,
  (homeState) => homeState.get('products')
);

export {
  selectHome,
  makeSelectUsername,
  selectProducts,
};
