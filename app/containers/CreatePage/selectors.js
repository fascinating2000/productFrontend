/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCreate = (state) => state.get('create');

const makeSelectUsername = () => createSelector(
  selectCreate,
  (homeState) => homeState.get('username')
);

const makeSelectSKU = () => createSelector(
  selectCreate,
  (homeState) => homeState.get('sku')
);

const makeSelectName = () => createSelector(
  selectCreate,
  (homeState) => homeState.get('name')
);

const makeSelectCost = () => createSelector(
  selectCreate,
  (homeState) => homeState.get('cost')
);

const makeSelectFreight = () => createSelector(
  selectCreate,
  (homeState) => homeState.get('freight')
);

export {
  selectCreate,
  makeSelectUsername,
  makeSelectSKU,
  makeSelectName,
  makeSelectCost,
  makeSelectFreight,
};
