/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_PRODUCT } from './constants';
import { fetchProductFailed, fetchProductSuccess } from './actions';

import request from 'utils/request';

export function* fetchProduct(action) {
  const sku = action.sku;

  const requestURL = `http://ec2-18-221-88-51.us-east-2.compute.amazonaws.com:3001/${sku}`;

  try {
    const params = {
      method: 'GET',
    };

    const res = yield call(request, requestURL, params);
    yield put(fetchProductSuccess(res));
  } catch (err) {
    yield put(fetchProductFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* calcData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcherB = yield takeLatest(FETCH_PRODUCT, fetchProduct);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcherB);
}

// Bootstrap sagas
export default [
  calcData,
];
