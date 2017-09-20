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
  CHANGE_SKU,
  CHANGE_NAME,
  CHANGE_FREIGHT,
  CHANGE_COST,
  CHANGE_PRICE,
  FETCH_PRODUCT_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  sku: '',
  name: '',
  cost: '',
  freight: '',
  price: '',
  products: [],
  saving: false,
});

function calcReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SKU:
      return state
        .set('sku', action.sku);
    case CHANGE_NAME:
      return state
        .set('name', action.name);
    case CHANGE_COST:
      return state
        .set('cost', action.cost);
    case CHANGE_FREIGHT:
      return state
        .set('freight', action.freight);
    case CHANGE_PRICE:
      return state
        .set('price', action.price);
    case FETCH_PRODUCT_SUCCESS:
      return state
        .set('sku', action.payload.sku)
        .set('name', action.payload.name)
        .set('cost', action.payload.cost)
        .set('freight', action.payload.freight)
        .set('price', '');
    default:
      return state;
  }
}

export default calcReducer;
