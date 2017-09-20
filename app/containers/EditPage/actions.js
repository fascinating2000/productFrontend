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
  CHANGE_SKU,
  CHANGE_NAME,
  CHANGE_COST,
  CHANGE_FREIGHT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function fetchProduct(sku) {
  return {
    type: FETCH_PRODUCT,
    sku,
  };
}

export function fetchProductSuccess(payload) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload,
  };
}

export function fetchProductFailed(payload) {
  return {
    type: FETCH_PRODUCT_FAILED,
    payload,
  };
}

export function changeSKU(sku) {
  return {
    type: CHANGE_SKU,
    sku,
  };
}

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}

export function changeCost(cost) {
  return {
    type: CHANGE_COST,
    cost,
  };
}

export function changeFreight(freight) {
  return {
    type: CHANGE_FREIGHT,
    freight,
  };
}

export function updateProduct(id, sku, name, cost, freight) {
  return {
    type: UPDATE_PRODUCT,
    id,
    sku,
    name,
    cost,
    freight,
  };
}

export function updateProductSuccessed(payload) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload,
  };
}

export function updateProductFailed(payload) {
  return {
    type: UPDATE_PRODUCT_FAILED,
    payload,
  };
}
