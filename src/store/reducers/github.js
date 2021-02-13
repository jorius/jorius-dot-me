// @packages
import { combineReducers } from 'redux';

// @config
import { configuration } from '../../configuration';

// @actions
import { GET_GITHUB_USER } from '../actions';

const publicReposReducer = (
  state = configuration.initialState.github.publicRepos, action
) => {
  switch (action.type) {
    case GET_GITHUB_USER:
      return action.payload.user.publicRepos;
    default:
      return state;
  }
};

export const githubReducer = combineReducers({
  publicRepos: publicReposReducer,
});
