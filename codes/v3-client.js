import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './modules/v3-routing-table';

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
