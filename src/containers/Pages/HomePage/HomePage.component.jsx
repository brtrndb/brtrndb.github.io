import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './HomePage.i18n';
import { HomePageContainer } from './HomePage.style';

const toSubtitle = (subtitle) => (
  <Grid key={subtitle.id} item>
    <Typography variant='subtitle1'>
      <FormattedMessage {...subtitle} />
    </Typography>
  </Grid>
);

const HomePage = () => (
  <HomePageContainer>
    <Grid container direction='column' justify='center' alignItems='center' alignContent='center'>
      <Grid item>
        <Typography variant='h2' align='center'>
          <FormattedMessage {...messages.welcome} />
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='center' alignItems='center' alignContent='center' spacing={8}>
          {[messages.my_name, messages.i_am, messages.i_try].map(toSubtitle)}
        </Grid>
      </Grid>
    </Grid>
  </HomePageContainer>
);

export default HomePage;
