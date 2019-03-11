import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from 'Containers/Pages/HomePage';

const Routes = ({ baseurl }) => (
  <div>
    <Switch>
      <Route exact path={baseurl} component={HomePage} />
    </Switch>
  </div>
);

export default Routes;
