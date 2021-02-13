// @packages
import { combineReducers } from 'redux';

// @scripts
import { settingsReducer } from './settings';

const mainReducer = combineReducers({
  settings: settingsReducer,
});

export const rootReducer = (state, action) => {
  const currentState = state;
  return mainReducer(currentState, action);
};
