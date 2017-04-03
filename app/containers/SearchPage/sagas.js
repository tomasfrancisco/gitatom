import { LOCATION_CHANGE } from 'react-router-redux';
import { throttle, take, cancel, put, call } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_GITHUB_USER } from './constants';
import { githubUserLoaded, githubUserLoadingError } from './actions';

export function* fetchGithubUser(action) {
  const requestURL = `https://api.github.com/users/${action.username}`;

  try {
    const user = yield call(request, requestURL);
    yield put(githubUserLoaded(user));
  } catch (err) {
    yield put(githubUserLoadingError(err));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield throttle(1000, FETCH_GITHUB_USER, fetchGithubUser);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
