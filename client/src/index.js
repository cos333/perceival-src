import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router'

import './index.css';
import App from './App';

import makeRoutes from './routes'

const routes = makeRoutes()

ReactDOM.render(
  <App history={browserHistory}
        routes={routes} />,
document.getElementById('root'));