import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvEntryDescriptionContainer } from './CvEntry.style';

const CvEntryDescription = ({ title, content }) => (
  <CvEntryDescriptionContainer>
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='subtitle2'>
          <FormattedMessage {...title} />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2' align='justify'>
          <FormattedMessage {...content} />
        </Typography>
      </Grid>
    </Grid>
  </CvEntryDescriptionContainer>
);

CvEntryDescription.propTypes = {
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired
};

export default CvEntryDescription;
