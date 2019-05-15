import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

import { RightHarpoonUp } from 'Components/Fonts';
import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvEntryDateContainer } from './CvEntry.style';

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

export default CvEntryDate;
