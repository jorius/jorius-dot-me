// @packages
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';

// @configuration
import { configuration } from './index';

// @utils
import { mapComponent } from './mapper';

const MainRoutes = () => {
  const { languageCode } = useSelector((state) => state.settings);

  configuration.applyLanguage(languageCode);

  const mapRoutes = () => configuration.routes.map((route, index) => (
    <Route
      component={mapComponent(route.component)}
      exact={route.exact}
      key={`${route.path}-${index}`}
      path={route.path}
    />
  ));

  return (
    <Switch>
      {mapRoutes()}
    </Switch>
  );
};

export default MainRoutes;
