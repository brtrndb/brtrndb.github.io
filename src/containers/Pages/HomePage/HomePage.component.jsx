import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import messages from './HomePage.i18n';
import { styles, HomePageContainer } from './HomePage.style';

const toSubtitle = (msg) => (
  <Grid key={msg.id} item>
    <Typography variant='subtitle1'>
      <FormattedMessage {...msg} />
    </Typography>
  </Grid>
);

const HomePage = ({ classes }) => (
  <HomePageContainer>
    <Grid container direction='column' justify='center' alignItems='center' alignContent='center' className={classes.mainGrid}>
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

HomePage.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(HomePage);
