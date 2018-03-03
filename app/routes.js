/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import App from './containers/App';
import Player from './containers/Player';

function redirect() {
  return (
    <Redirect to="/station/0" />
  );
}

export default () => (
  <App>
    <Switch>
      <Route exact path="/" render={redirect} />
      <Route path="/station/:id" component={Player} />
    </Switch>
  </App>
);
