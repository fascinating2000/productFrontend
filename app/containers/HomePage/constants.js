/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'product/Home/CHANGE_USERNAME';
export const FETCH_PRODUCTS = 'product/Home/FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'product/Home/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'product/Home/FETCH_PRODUCTS_FAILED';

export const REMOVE_PRODUCT = 'product/Home/REMOVE_PRODUCT';
export const REMOVE_PRODUCT_SUCCESS = 'product/Home/REMOVE_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_FAILED = 'product/Home/REMOVE_PRODUCT_FAILED';
