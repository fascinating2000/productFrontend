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
  CHANGE_SKU,
  CHANGE_NAME,
  CHANGE_FREIGHT,
  CHANGE_COST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  sku: '',
  name: '',
  cost: '',
  freight: '',
  products: [],
  saving: false,
});

function createReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
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
    case ADD_PRODUCT_SUCCESS:
      return state
        .set('saving', false)
        .set('sku', '')
        .set('name', '')
        .set('cost', '')
        .set('freight', '');
    case ADD_PRODUCT_FAILED:
      return state
        .set('saving', false);
    default:
      return state;
  }
}

export default createReducer;
