// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

// @pages
import MainRoutes from '../configuration/routes';

// @store
import { reduxStore } from '../store';

// @theme
import { materialCustomTheme } from '../styles';

const AppContainer = () => (
  <Provider store={reduxStore}>
    <ThemeProvider theme={materialCustomTheme}>
      <CssBaseline />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default AppContainer;
