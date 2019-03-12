import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { HomePageContainer, WelcomeContainer } from './HomePage.style';
import { messages } from './HomePage.i18n';

const HomePage = () => (
  <HomePageContainer>
    <WelcomeContainer>
      <Grid container direction='column' justify='center' alignItems='center' alignContent='center'>
        <Grid item>
          <Typography variant='h2'>
            <FormattedMessage id={messages.welcome} />
          </Typography>
        </Grid>
      </Grid>
    </WelcomeContainer>
  </HomePageContainer>
);

export default HomePage;
