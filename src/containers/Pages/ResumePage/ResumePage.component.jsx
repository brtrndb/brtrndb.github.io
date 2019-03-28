import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './ResumePage.i18n';
import { ResumePageContainer } from './ResumePage.style';

const sectionsData = [
  {
    title: 'Title'
  },
  {
    title: 'Title'
  },
  {
    title: 'Title'
  }
];

const toSection = (data) => (
  <Grid item xs={12} md={4}>
    {data.title}
  </Grid>
);

const ResumePage = () => (
  <ResumePageContainer>
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h2' align='center'>
          <FormattedMessage {...messages.title} />
        </Typography>
      </Grid>

      <Grid item>
        <Grid container direction='row' alignItems='stretch' justify='space-around' spacing={24}>
          {sectionsData.map(toSection)}
        </Grid>
      </Grid>
    </Grid>
  </ResumePageContainer>
);

export default ResumePage;
