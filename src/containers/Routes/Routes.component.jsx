import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from 'Containers/Pages/HomePage';

import { RoutesContainer } from './Routes.style';

const Routes = () => (
  <RoutesContainer>
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  </RoutesContainer>
);

export default Routes;
