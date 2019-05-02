import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import Img from 'react-image';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

import { RightHarpoonUp } from 'Components/Fonts';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer, CvEntryImageContainer } from './CvComponents.style';

import { internalMessages } from '../ResumePage.i18n';

const dateFormats = {
  short: {
    year: 'numeric'
  },
  long: {
    year: 'numeric',
    month: 'long'
  }
};

const configureDate = (date, format) => {
  if (typeof date === 'string' && date !== '') {
    return <FormattedDate value={new Date(date)} {...dateFormats[format]} />;
  }
  if (typeof date === 'object') {
    return <FormattedMessage {...date} />;
  }
  return null;
};

const configureArrow = (from, withBr) => {
  return from !== '' ? (
    <>
      <RightHarpoonUp />
      {withBr ? <br /> : null}
    </>
  ) : null;
};

const CvEntryDate = ({ from, to, format }) => (
  <CvEntryDateContainer>
    <Typography variant='subtitle1' align='right'>
      <FormattedMessage
        {...internalMessages.cvEntryDate}
        values={{
          from: configureDate(from, format),
          arrow: configureArrow(from, format === 'long' && useMediaQuery(useTheme().breakpoints.up('md'))),
          to: configureDate(to, format)
        }}
      />
    </Typography>
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

const CvEntryImage = ({ image }) => (
  <CvEntryImageContainer>
    <Img src={image} />
  </CvEntryImageContainer>
);

CvEntryImage.propTypes = {
  image: PropTypes.string.isRequired
};

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
