// @packages
import { combineReducers } from 'redux';

// @config
import { configuration } from '../../configuration';

// @actions
import { GET_GITHUB_USER_REPOS, GET_GITHUB_USER_REPOS_FAILED } from '../actions';

const reposReducer = (
  state = configuration.initialState.github.repos, action
) => {
  switch (action.type) {
    case GET_GITHUB_USER_REPOS:
      return action.payload.repos.sort((a, b) => (a.name - b.name));
    default:
      return state;
  }
};

// True when the GitHub request failed, typically because the unauthenticated
// rate limit for the visitor's network is exhausted.
const errorReducer = (state = false, action) => {
  switch (action.type) {
    case GET_GITHUB_USER_REPOS:
      return false;
    case GET_GITHUB_USER_REPOS_FAILED:
      return true;
    default:
      return state;
  }
};

export const githubReducer = combineReducers({
  error: errorReducer,
  repos: reposReducer,
});
