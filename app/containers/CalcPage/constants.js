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

export const CHANGE_SKU = 'product/Calc/CHANGE_SKU';
export const CHANGE_NAME = 'product/Calc/CHANGE_NAME';
export const CHANGE_PRICE = 'product/Calc/CHANGE_PRICE';
export const CHANGE_COST = 'product/Calc/CHANGE_COST';
export const CHANGE_FREIGHT = 'product/Calc/CHANGE_FREIGHT';
export const FETCH_PRODUCT = 'product/Calc/FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'product/Calc/FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILED = 'product/Calc/FETCH_PRODUCT_FAILED';
