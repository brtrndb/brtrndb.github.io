import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles, HomePageContainer } from './HomePage.style';
import { messages } from './HomePage.i18n';

const HomePage = ({ classes }) => (
  <HomePageContainer>
    <Grid container direction='column' justify='center' alignItems='center' alignContent='center' className={classes.mainGrid}>
      <Grid item>
        <Typography variant='h2' align='center'>
          <FormattedMessage id={messages.welcome} />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' align='center'>
          <Grid container direction='row' justify='center' alignItems='center' alignContent='center' spacing={8}>
            <Grid item>
              <FormattedMessage id={messages.my_name} />
            </Grid>
            <Grid item>
              <FormattedMessage id={messages.i_am} />
            </Grid>
            <Grid item>
              <FormattedMessage id={messages.i_try} />
            </Grid>
          </Grid>
        </Typography>
      </Grid>
    </Grid>
  </HomePageContainer>
);

export default withStyles(styles)(HomePage);
