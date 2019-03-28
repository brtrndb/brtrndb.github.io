import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './ResumePage.i18n';
import { ResumePageContainer } from './ResumePage.style';

import CvSection, { CvEntry } from './CvComponents';

const sectionsData = [
  {
    icon: 'graduation-cap',
    title: messages.education,
    entries: [
      { from: messages.educationEpitechStartYear, to: messages.educationEpitechEndYear, title: messages.educationEpitechTitle, content: messages.educationEpitechContent },
      { from: messages.educationGriffithStartYear, to: messages.educationGriffithEndYear, title: messages.educationGriffithTitle, content: messages.educationGriffithContent },
      { from: messages.educationEISTIStartYear, to: messages.educationEISTIEndYear, title: messages.educationEISTITitle, content: messages.educationEISTIContent },
      { to: messages.educationLyceeEndYear, title: messages.educationLyceeTitle, content: messages.educationLyceeContent }
    ]
  },
  {
    icon: 'briefcase',
    title: messages.experience,
    entries: []
  },
  {
    icon: 'code',
    title: messages.skills,
    entries: []
  }
];

const toSection = (data) => (
  <Grid item xs={12} md={4}>
    <CvSection icon={data.icon} title={data.title}>
      {data.entries.map(CvEntry)}
    </CvSection>
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
