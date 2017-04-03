/*
 *
 * SearchPage actions
 *
 */

import {
  FETCH_GITHUB_USER,
  GITHUB_USER_LOADED,
  GITHUB_USER_LOADING_ERROR,
} from './constants';

export function fetchGithubUser(username) {
  return {
    type: FETCH_GITHUB_USER,
    username,
  };
}

export function githubUserLoaded(user) {
  return {
    type: GITHUB_USER_LOADED,
    user,
  };
}

export function githubUserLoadingError(error) {
  return {
    type: GITHUB_USER_LOADING_ERROR,
    error,
  };
}
