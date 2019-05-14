import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvSkillContentContainer } from './CvComponents.style';

const toSkillLine = (line) => (
  <Grid item key={line.id}>
    <Typography variant='body2'>
      <FormattedMessage {...line} />
    </Typography>
  </Grid>
);

const CvSkillContent = ({ content }) => (
  <CvSkillContentContainer>
    <Grid container direction='column'>
      {content.map(toSkillLine)}
    </Grid>
  </CvSkillContentContainer>
);

CvSkillContent.propTypes = {
  content: PropTypes.arrayOf(messageDescriptorPropTypes).isRequired
};

export default CvSkillContent;
