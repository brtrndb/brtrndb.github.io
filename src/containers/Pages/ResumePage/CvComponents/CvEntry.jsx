import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import CvEntryDate from './CvEntryDate';
import CvEntryContent from './CvEntryContent';

import { CvEntryContainer } from './CvComponents.style';

const CvEntry = ({ from, to, dateFormat, title, content, image }) => (
  <CvEntryContainer>
    <Grid container direction='row' alignItems='baseline' spacing={useMediaQuery(useTheme().breakpoints.up('md')) ? 16 : 0}>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <CvEntryDate from={from} to={to} format={dateFormat} />
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
        <CvEntryContent title={title} content={content} image={image} />
      </Grid>
    </Grid>
  </CvEntryContainer>
);

CvEntry.propTypes = {
  from: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  to: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  dateFormat: PropTypes.string,
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired
};

CvEntry.defaultProps = {
  from: '',
  to: '',
  dateFormat: 'short'
};

export default CvEntry;
