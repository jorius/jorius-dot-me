/* eslint-disable camelcase */

// @languages
import languages from '../languages';

// @menus
import mainMenu from './menus/main-menu.json';

// @state
import initialState from '../store/state/initial-state.json';

// @constants
const mappedLanguages = {
  en_US: languages.en_US,
  es_LA: languages.es_LA,
};

function applyLanguage(languageCode) {
  const config = this;

  config.language = mappedLanguages[languageCode];

  config.languageList = Object.keys(mappedLanguages).map((language) => ({
    label: config.language.languages[language],
    languageCode: language,
  }));

  const buildMenu = (menu) => menu.map((menuItem) => ({
    ...menuItem,
    label: config.language.mainMenu[menuItem.name],
  }));

  config.mainMenu = buildMenu(mainMenu);
}

const buildRoutes = (routes) => routes.map((route) => ({
  component: route.component,
  exact: route?.exact,
  path: route.path,
}));

const getConfiguration = () => {
  if (global.config) {
    return global.config;
  }

  const mainRoutes = buildRoutes(mainMenu);

  const config = {
    applyLanguage,
    initialState,
    routes: mainRoutes,
  };

  config.applyLanguage(config.initialState.settings.languageCode);
  global.config = config;
  return config;
};

export const configuration = getConfiguration();
