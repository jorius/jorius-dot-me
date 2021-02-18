// @packages
import { combineReducers } from 'redux';

// @scripts
import { githubReducer } from './github';
import { settingsReducer } from './settings';

const mainReducer = combineReducers({
  github: githubReducer,
  settings: settingsReducer,
});

export const rootReducer = (state, action) => {
  const currentState = state;
  return mainReducer(currentState, action);
};
