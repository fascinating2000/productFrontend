/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCalc = (state) => state.get('calc');

const makeSelectUsername = () => createSelector(
  selectCalc,
  (homeState) => homeState.get('username')
);

const makeSelectSKU = () => createSelector(
  selectCalc,
  (homeState) => homeState.get('sku')
);

const makeSelectName = () => createSelector(
  selectCalc,
  (homeState) => homeState.get('name')
);

const makeSelectCost = () => createSelector(
  selectCalc,
  (homeState) => homeState.get('cost')
);

const makeSelectFreight = () => createSelector(
  selectCalc,
  (homeState) => homeState.get('freight')
);

const makeSelectPrice = () => createSelector(
  selectCalc,
  (homeState) => homeState.get('price')
);

export {
  selectCalc,
  makeSelectUsername,
  makeSelectSKU,
  makeSelectName,
  makeSelectCost,
  makeSelectFreight,
  makeSelectPrice,
};
