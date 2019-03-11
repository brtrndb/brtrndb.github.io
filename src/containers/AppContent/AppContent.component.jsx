import React from 'react';

import Routes from 'Containers/Routes';
import Helmet from 'Components/Helmet';

import { AppContentContainer } from './AppContent.style';

const AppContent = () => (
  <AppContentContainer>
    <Helmet />
    <Routes baseurl='/' />
  </AppContentContainer>
);

export default AppContent;
