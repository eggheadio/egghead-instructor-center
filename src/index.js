import React from 'react';
import ReactDOM from 'react-dom';
import {configureUrlQuery} from 'react-url-query';

import 'tachyons'
import './index.css';

import history from './App/shared/utils/history';
import App from './App';

configureUrlQuery({history});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
