import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import CvEntryDescription from './CvEntryDescription';
import CvEntryImage from './CvEntryImage';

import { CvEntryContentContainer } from './CvEntry.style';

const CvEntryContent = ({ title, content, image }) => {
  const showImage = image !== '' && useMediaQuery('(min-width:600px)');
  const bpValue = showImage ? 10 : 12;
  const imageGrid = showImage ? (
    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
      <CvEntryImage image={image} />
    </Grid>
  ) : null;

  return (
    <CvEntryContentContainer>
      <Grid container direction='row' alignItems='center' spacing={16}>
        <Grid item xs={bpValue} sm={bpValue} md={bpValue} lg={bpValue} xl={bpValue}>
          <CvEntryDescription title={title} content={content} />
        </Grid>
        {imageGrid}
      </Grid>
    </CvEntryContentContainer>
  );
};

CvEntryContent.propTypes = {
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired,
  image: PropTypes.string
};

CvEntryContent.defaultProps = {
  image: ''
};

export default CvEntryContent;
