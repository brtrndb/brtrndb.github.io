import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from 'Containers/Pages/HomePage';
import ResumePage from 'Containers/Pages/ResumePage';

import { RoutesContainer } from './Routes.style';

const Routes = () => (
  <RoutesContainer>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/resume' component={ResumePage} />
    </Switch>
  </RoutesContainer>
);

export default Routes;
