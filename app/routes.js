/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Player from './containers/Player';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={Player} />
    </Switch>
  </App>
);
