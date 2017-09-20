/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import { FETCH_PRODUCTS, REMOVE_PRODUCT } from './constants';
import { fetchProductSuccess, fetchProductFailed, removeProductFailed, removeProductSuccess } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';


/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getProducts() {
  const requestURL = 'http://192.168.1.240:3001/';

  try {
    const res = yield call(request, requestURL, {
      method: 'GET',
    });
    yield put(fetchProductSuccess(res));
  } catch (err) {
    yield put(fetchProductFailed(err));
  }
}

export function* removeProduct(action) {
  const requestURL = `http://192.168.1.240:3001/${action.sku}`;

  try {
    const res = yield call(request, requestURL, {
      method: 'DELETE',
    });

    yield put(removeProductSuccess(action.sku));
  } catch (err) {
    yield put(removeProductFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS, getRepos);
  const watcherA = yield takeLatest(FETCH_PRODUCTS, getProducts);
  const watcherB = yield takeLatest(REMOVE_PRODUCT, removeProduct);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(watcherA);
  yield cancel(watcherB);
}

// Bootstrap sagas
export default [
  githubData,
];
