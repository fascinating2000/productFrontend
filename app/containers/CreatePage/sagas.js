/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { ADD_PRODUCT } from './constants';
import { addProductSuccessed, addProductFailed } from './actions';
import { makeSelectFreight, makeSelectCost, makeSelectName, makeSelectSKU } from './selectors';

import request from 'utils/request';

export function* addProduct() {
  const sku = yield select(makeSelectSKU());
  const name = yield select(makeSelectName());
  const cost = yield select(makeSelectCost());
  const freight = yield select(makeSelectFreight());

  const requestURL = `http://ec2-18-221-88-51.us-east-2.compute.amazonaws.com:3001/?sku=${sku}&name=${name}&cost=${cost}&freight=${freight}`;

  try {
    const params = {
      method: 'POST',
    };

    const res = yield call(request, requestURL, params);
    yield put(addProductSuccessed(res));
  } catch (err) {
    yield put(addProductFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* createData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcherA = yield takeLatest(ADD_PRODUCT, addProduct);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcherA);
}

// Bootstrap sagas
export default [
  createData,
];
