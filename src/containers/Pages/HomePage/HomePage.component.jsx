import React from 'react';
import { FormattedMessage } from 'react-intl';

import { HomePageContainer } from './HomePage.style';
import { messages } from './HomePage.i18n';

const HomePage = () => (
  <HomePageContainer>
    <FormattedMessage id={messages.welcome} />
  </HomePageContainer>
);

export default HomePage;
