import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RightHarpoonUp } from 'Components/Fonts';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer } from './ResumePage.style';

const dateFormats = {
  short: {
    year: 'numeric'
  },
  long: {
    year: 'numeric',
    month: 'long'
  }
};

const CvSection = ({ icon, title, children }) => (
  <Grid container direction='column' alignItems='center'>
    <Grid item>
      <FontAwesomeIcon icon={icon} />
    </Grid>

    <Grid item>
      <Typography variant='h4'>
        <FormattedMessage {...title} />
      </Typography>
    </Grid>

    <Grid item>{children}</Grid>
  </Grid>
);

CvSection.propTypes = {
  icon: PropTypes.string.isRequired,
  title: messageDescriptorPropTypes.isRequired,
  children: PropTypes.node
};

CvSection.defaultProps = {
  children: null
};

const CvEntryDate = ({ from, to, format }) => (
  <CvEntryDateContainer>
    {from && typeof from === 'string' ? <FormattedDate value={new Date(from)} {...dateFormats[format]} /> : null}
    {from && typeof from === 'object' ? <FormattedMessage {...from} /> : null}
    {from ? <RightHarpoonUp /> : null}
    {format === 'long' ? <br /> : null}
    {to && typeof to === 'string' ? <FormattedDate value={new Date(to)} {...dateFormats[format]} /> : null}
    {to && typeof to === 'object' ? <FormattedMessage {...to} /> : null}
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
    <Typography variant='subtitle2'>
      <FormattedMessage {...title} />
    </Typography>
    <Typography variant='body2'>
      <FormattedMessage {...content} />
    </Typography>
  </CvEntryContentContainer>
);

CvEntryContent.propTypes = {
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired
};

const CvEntry = ({ from, to, dateFormat, title, content }) => (
  <CvEntryContainer key={title.id}>
    <Grid container direction='row' alignItems='baseline' spacing={8}>
      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
        <CvEntryDate from={from} to={to} format={dateFormat} />
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
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

export { CvEntry };
export default CvSection;
