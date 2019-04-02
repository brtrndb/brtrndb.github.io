import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvSectionContainer } from './CvComponents.style';

const CvSection = ({ icon, title, children }) => (
  <CvSectionContainer>
    <Grid container direction='column'>
      <Grid item>
        <FontAwesomeIcon icon={icon} />
      </Grid>
      <Grid item>
        <Typography variant='h4'>
          <FormattedMessage {...title} />
        </Typography>
      </Grid>
      {children ? <Grid item>{children}</Grid> : null}
    </Grid>
  </CvSectionContainer>
);

CvSection.propTypes = {
  icon: PropTypes.string.isRequired,
  title: messageDescriptorPropTypes.isRequired,
  children: PropTypes.node
};

CvSection.defaultProps = {
  children: null
};

export default CvSection;
