import React from 'react';

import Routes from 'Containers/Routes';
import Helmet from 'Components/Helmet';
import Header from 'Components/Header';

import { AppContentContainer, RoutesContentContainer } from './AppContent.style';

const AppContent = () => (
  <AppContentContainer>
    <Helmet />
    <Header />
    <RoutesContentContainer>
      <Routes />
    </RoutesContentContainer>
  </AppContentContainer>
);

export default AppContent;
