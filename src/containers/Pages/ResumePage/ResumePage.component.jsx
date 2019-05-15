import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './ResumePage.i18n';
import { ResumePageContainer } from './ResumePage.style';

import CvSection from './CvComponents/CvSection';
import sections from './sections';

const toCvSection = (section) => (
  <Grid item key={section.title.id} {...section.styles.section.breakpoints}>
    <CvSection {...section} />
  </Grid>
);

const ResumePage = () => (
  <ResumePageContainer style={{ padding: 20 }}>
    <Grid container direction='column' spacing={40}>
      <Grid item>
        <Typography variant='h2' align='center'>
          <FormattedMessage {...messages.title} />
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='space-evenly' spacing={0}>
          {sections.map(toCvSection)}
        </Grid>
      </Grid>
    </Grid>
  </ResumePageContainer>
);

export default ResumePage;
