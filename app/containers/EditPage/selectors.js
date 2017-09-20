/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectEdit = (state) => state.get('edit');

const makeSelectUsername = () => createSelector(
  selectEdit,
  (homeState) => homeState.get('username')
);

const makeSelectSKU = () => createSelector(
  selectEdit,
  (homeState) => homeState.get('sku')
);

const makeSelectName = () => createSelector(
  selectEdit,
  (homeState) => homeState.get('name')
);

const makeSelectCost = () => createSelector(
  selectEdit,
  (homeState) => homeState.get('cost')
);

const makeSelectFreight = () => createSelector(
  selectEdit,
  (homeState) => homeState.get('freight')
);

export {
  selectEdit,
  makeSelectUsername,
  makeSelectSKU,
  makeSelectName,
  makeSelectCost,
  makeSelectFreight,
};
