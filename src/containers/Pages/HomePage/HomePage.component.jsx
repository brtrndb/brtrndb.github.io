import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles, HomePageContainer } from './HomePage.style';
import { messages } from './HomePage.i18n';

const toSubtitle = (msg) => (
  <Grid key={msg} item>
    <FormattedMessage id={msg} />
  </Grid>
);

const HomePage = ({ classes }) => (
  <HomePageContainer>
    <Grid container direction='column' justify='center' alignItems='center' alignContent='center' className={classes.mainGrid}>
      <Grid item>
        <Typography variant='h2' align='center'>
          <FormattedMessage id={messages.welcome} />
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='center' alignItems='center' alignContent='center' spacing={8}>
          <Typography variant='subtitle1'>{[messages.my_name, messages.i_am, messages.i_try].map(toSubtitle)}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </HomePageContainer>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(HomePage);
