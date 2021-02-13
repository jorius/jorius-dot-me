// @packages
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app';

// @styles
import './assets/css/site.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
