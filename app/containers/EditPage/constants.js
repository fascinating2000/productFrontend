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

export const CHANGE_SKU = 'product/Edit/CHANGE_SKU';
export const CHANGE_NAME = 'product/Edit/CHANGE_NAME';
export const CHANGE_COST = 'product/Edit/CHANGE_COST';
export const CHANGE_FREIGHT = 'product/Edit/CHANGE_FREIGHT';
export const FETCH_PRODUCT = 'product/Edit/FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'product/Edit/FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILED = 'product/Edit/FETCH_PRODUCT_FAILED';
export const UPDATE_PRODUCT = 'product/Edit/UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'product/Edit/UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILED = 'product/Edit/UPDATE_PRODUCT_FAILED';
