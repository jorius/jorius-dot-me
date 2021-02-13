// @constants
export const SET_LANGUAGE_CODE = 'SET_LANGUAGE_CODE';
export const SET_MENU_VISIBILITY = 'SET_MENU_VISIBILITY';

export const setLanguageCode = (languageCode) => ({
  payload: { languageCode },
  type: SET_LANGUAGE_CODE,
});

export const setMenuVisibility = (visibility) => ({
  payload: { visibility },
  type: SET_MENU_VISIBILITY,
});
