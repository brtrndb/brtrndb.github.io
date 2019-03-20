import React from 'react';

import Routes from 'Containers/Routes';
import Helmet from 'Components/Helmet';
import Header from 'Components/Header';

import { AppContentContainer } from './AppContent.style';

const AppContent = () => (
  <AppContentContainer>
    <Helmet />
    <Header />
    <Routes baseurl='/' />
  </AppContentContainer>
);

export default AppContent;
