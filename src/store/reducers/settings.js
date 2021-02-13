// @packages
import { combineReducers } from 'redux';

// @config
import { configuration } from '../../configuration';

// @actions
import { SET_LANGUAGE_CODE, SET_MENU_VISIBILITY } from '../actions';

const isMenuOpenReducer = (
  state = configuration.initialState.settings.isMenuOpen, action
) => {
  switch (action.type) {
    case SET_MENU_VISIBILITY:
      return action.payload.visibility;
    default:
      return state;
  }
};

const languageCodeReducer = (
  state = configuration.initialState.settings.languageCode, action
) => {
  switch (action.type) {
    case SET_LANGUAGE_CODE:
      return action.payload.languageCode;
    default:
      return state;
  }
};

export const settingsReducer = combineReducers({
  isMenuOpen: isMenuOpenReducer,
  languageCode: languageCodeReducer,
});
