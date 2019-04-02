import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { RightHarpoonUp } from 'Components/Fonts';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer } from './CvComponents.style';

const dateFormats = {
  short: {
    year: 'numeric'
  },
  long: {
    year: 'numeric',
    month: 'long'
  }
};

const CvLongDate = ({ from, to }) => (
  <Grid container direction='row'>
    <Grid item>
      {from && typeof from === 'string' ? <FormattedDate value={new Date(from)} {...dateFormats.long} /> : null}
      {from && typeof from === 'object' ? <FormattedMessage {...from} /> : null}
    </Grid>
    <Grid item>{from ? <RightHarpoonUp /> : null}</Grid>
    <Grid item>
      {to && typeof to === 'string' ? <FormattedDate value={new Date(to)} {...dateFormats.long} /> : null}
      {to && typeof to === 'object' ? <FormattedMessage {...to} /> : null}
    </Grid>
  </Grid>
);

const CvShortDate = ({ from, to }) => (
  <Grid item>
    {from && typeof from === 'string' ? <FormattedDate value={new Date(from)} {...dateFormats.short} /> : null}
    {from && typeof from === 'object' ? <FormattedMessage {...from} /> : null}
    {from ? <RightHarpoonUp /> : null}
    {to && typeof to === 'string' ? <FormattedDate value={new Date(to)} {...dateFormats.short} /> : null}
    {to && typeof to === 'object' ? <FormattedMessage {...to} /> : null}
  </Grid>
);

const CvEntryDate = ({ from, to, format }) => (
  <CvEntryDateContainer>
    <Typography variant='subtitle1'>{format === 'long' ? <CvLongDate from={from} to={to} /> : <CvShortDate from={from} to={to} />} </Typography>
  </CvEntryDateContainer>
);

CvEntryDate.propTypes = {
  from: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  to: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  format: PropTypes.string
};

CvEntryDate.defaultProps = {
  from: '',
  to: '',
  format: 'short'
};

const CvEntryContent = ({ title, content }) => (
  <CvEntryContentContainer>
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
  </CvEntryContentContainer>
);

CvEntryContent.propTypes = {
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired
};

const CvEntry = ({ from, to, dateFormat, title, content }) => (
  <CvEntryContainer>
    <Grid container direction='row'>
      <Grid item>
        <CvEntryDate from={from} to={to} format={dateFormat} />
      </Grid>
      <Grid item>
        <CvEntryContent title={title} content={content} />
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
