/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  REMOVE_PRODUCT_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  products: [],
});

function homeReducer(state = initialState, action) {
  const products = state.get('products');
  const nProducts = [];
  let i;
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case FETCH_PRODUCTS_SUCCESS:
      return state
        .set('products', action.payload);
    case FETCH_PRODUCTS_FAILED:
      return state;
    case REMOVE_PRODUCT_SUCCESS:
      i = products.length;
      while (i--) {
        if (products[i].sku !== action.payload) {
          nProducts.push(products[i]);
        }
      }
      nProducts.reverse();
      return state
        .set('products', nProducts);
    default:
      return state;
  }
}

export default homeReducer;
