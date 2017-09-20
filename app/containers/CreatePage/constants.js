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

export const CHANGE_USERNAME = 'product/Create/CHANGE_USERNAME';
export const CHANGE_SKU = 'product/Create/CHANGE_SKU';
export const CHANGE_NAME = 'product/Create/CHANGE_NAME';
export const CHANGE_COST = 'product/Create/CHANGE_COST';
export const CHANGE_FREIGHT = 'product/Create/CHANGE_FREIGHT';
export const ADD_PRODUCT = 'product/Create/ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'product/Create/ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILED = 'product/Create/ADD_PRODUCT_FAILED';
