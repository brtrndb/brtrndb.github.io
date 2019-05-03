import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import CvEntryImage from './CvEntryImage';

import { CvEntryContentContainer } from './CvComponents.style';

const CvEntryContent = ({ title, content, image }) => (
  <CvEntryContentContainer>
    <Grid container direction='row'>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='subtitle2'>
              <FormattedMessage {...title} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2'>
              <FormattedMessage {...content} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CvEntryImage image={image} />
      </Grid>
    </Grid>
  </CvEntryContentContainer>
);

CvEntryContent.propTypes = {
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired,
  image: PropTypes.string
};

CvEntryContent.defaultProps = {
  image: ''
};

export default CvEntryContent;
