/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_FAILED,
  REMOVE_PRODUCT_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
  };
}

export function fetchProductSuccess(payload) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
  };
}

export function fetchProductFailed(payload) {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload,
  };
}

export function removeProduct(sku) {
  return {
    type: REMOVE_PRODUCT,
    sku,
  };
}

export function removeProductFailed(payload) {
  return {
    type: REMOVE_PRODUCT_FAILED,
    payload,
  };
}

export function removeProductSuccess(payload) {
  return {
    type: REMOVE_PRODUCT_SUCCESS,
    payload,
  };
}

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
