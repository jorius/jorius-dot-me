/* eslint-disable camelcase */

// @http
import { addHttpInterceptors } from '../core/http-interceptors';

// @languages
import languages from '../languages';

// @menus
import mainMenu from './menus/main-menu.json';

// @services
import github from './services/github.json';

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

const buildServices = ({ github }) => ({
  github: JSON.parse(
    JSON.stringify(github)
      .replace(
        new RegExp('{root}', 'g'),
        process.env.REACT_APP_GITHUB_SERVICES_BASE_URL
      )
  )
});

const getConfiguration = () => {
  if (global.config) {
    return global.config;
  }

  const mainRoutes = buildRoutes(mainMenu);
  const services = buildServices({ github });

  addHttpInterceptors();

  const config = {
    applyLanguage,
    initialState,
    routes: mainRoutes,
    services,
  };

  config.applyLanguage(config.initialState.settings.languageCode);
  global.config = config;
  return config;
};

export const configuration = getConfiguration();
