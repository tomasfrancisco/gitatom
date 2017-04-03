/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GITHUB_USER_LOADED,
  GITHUB_USER_LOADING_ERROR,
} from './constants';

const initialState = fromJS({
  user: false,
  error: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case GITHUB_USER_LOADED:
      return state.set('user', action.user);
    case GITHUB_USER_LOADING_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default searchPageReducer;
