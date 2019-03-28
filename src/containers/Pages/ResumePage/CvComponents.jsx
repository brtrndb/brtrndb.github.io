import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RightHarpoonUp } from 'Components/Fonts';

import { CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer } from './ResumePage.style';

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

const CvEntryDate = ({ from, to }) => (
  <CvEntryDateContainer>
    {from ? <FormattedMessage {...from} /> : null}
    {from ? <RightHarpoonUp /> : null}
    <FormattedMessage {...to} />
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

const CvEntry = ({ from, to, title, content }) => (
  <CvEntryContainer>
    <Grid container direction='row' alignItems='baseline' spacing={8}>
      <Grid item xs={3}>
        <CvEntryDate from={from} to={to} />
      </Grid>
      <Grid item xs={9}>
        <CvEntryContent title={title} content={content} />
      </Grid>
    </Grid>
  </CvEntryContainer>
);

export { CvEntry };
export default CvSection;
