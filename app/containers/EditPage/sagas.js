/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { UPDATE_PRODUCT, FETCH_PRODUCT } from './constants';
import { updateProductSuccessed, updateProductFailed, fetchProductFailed, fetchProductSuccess } from './actions';
import { makeSelectFreight, makeSelectCost, makeSelectName, makeSelectSKU } from './selectors';

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

export function* updateProduct(action) {
  const sku = yield select(makeSelectSKU());
  const name = yield select(makeSelectName());
  const cost = yield select(makeSelectCost());
  const freight = yield select(makeSelectFreight());
  const id = action.id;

  const requestURL = `http://ec2-18-221-88-51.us-east-2.compute.amazonaws.com:3001/${id}?sku=${sku}&name=${name}&cost=${cost}&freight=${freight}`;

  try {
    const params = {
      method: 'PUT',
    };

    const res = yield call(request, requestURL, params);
    yield put(updateProductSuccessed(res));
  } catch (err) {
    yield put(updateProductFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* editData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcherA = yield takeLatest(UPDATE_PRODUCT, updateProduct);
  const watcherB = yield takeLatest(FETCH_PRODUCT, fetchProduct);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcherA);
  yield cancel(watcherB);
}

// Bootstrap sagas
export default [
  editData,
];
