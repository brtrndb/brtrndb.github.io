import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RightHarpoonUp } from 'Components/Fonts';

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

const CvEntry = ({ from, to, dateFormat, title, content }) => (
  <CvEntryContainer>
    <Grid container direction='row' alignItems='baseline' spacing={8}>
      <Grid item xs={3}>
        <CvEntryDate from={from} to={to} format={dateFormat} />
      </Grid>
      <Grid item xs={9}>
        <CvEntryContent title={title} content={content} />
      </Grid>
    </Grid>
  </CvEntryContainer>
);

export { CvEntry };
export default CvSection;
