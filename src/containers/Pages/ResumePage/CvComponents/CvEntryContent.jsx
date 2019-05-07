import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import CvEntryDescription from './CvEntryDescription';
import CvEntryImage from './CvEntryImage';

import { CvEntryContentContainer } from './CvComponents.style';

const CvEntryContent = ({ title, content, image }) => (
  <CvEntryContentContainer>
    <Grid container direction='row'>
      <Grid item>
        <CvEntryDescription title={title} content={content} />
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
