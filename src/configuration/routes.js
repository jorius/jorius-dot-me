// @packages
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

// @components
import MainMenu from '../components/navigation/main-menu';

// @configuration
import { configuration } from './index';

// @utils
import { mapComponent } from './mapper';

const MainRoutes = () => {
  const location = useLocation();
  const { languageCode } = useSelector((state) => state.settings);
  const currentUri = location.pathname;

  configuration.applyLanguage(languageCode);

  if (currentUri === '/') {
    return <Redirect to="/home" />;
  }

  const mapRoutes = () => configuration.routes.map((route, index) => (
    <Route
      component={mapComponent(route.component)}
      exact={route.exact}
      key={`${route.path}-${index}`}
      path={route.path}
    />
  ));

  return (
    <>
      <MainMenu />
      <Switch>
        {mapRoutes()}
      </Switch>
    </>
  );
};

export default MainRoutes;
