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
      { dateFormat: 'short', from: '2011/10/01', to: '2015/08/01', title: messages.educationEpitechTitle, content: messages.educationEpitechContent },
      { dateFormat: 'short', from: '2013/09/01', to: '2014/07/01', title: messages.educationGriffithTitle, content: messages.educationGriffithContent },
      { dateFormat: 'short', from: '2008/09/01', to: '2011/07/01', title: messages.educationEISTITitle, content: messages.educationEISTIContent },
      { dateFormat: 'short', to: '2008/07/01', title: messages.educationLyceeTitle, content: messages.educationLyceeContent }
    ]
  },
  {
    icon: 'briefcase',
    title: messages.experience,
    entries: [
      { dateFormat: 'long', from: '2018/04/01', to: messages.now, title: messages.experienceWemanityTitle, content: messages.experienceWemanityContent },
      { dateFormat: 'long', from: '2016/10/01', to: '2018/02/01', title: messages.experienceDhatimTitle, content: messages.experienceDhatimContent },
      { dateFormat: 'long', from: '2015/03/01', to: '2016/10/01', title: messages.experienceVisianTitle, content: messages.experienceVisianContent },
      { dateFormat: 'long', from: '2014/09/01', to: '2015/03/01', title: messages.experienceSIITitle, content: messages.experienceSIIContent },
      { dateFormat: 'long', from: '2013/04/01', to: '2013/08/01', title: messages.experienceThalesTitle, content: messages.experienceThalesContent },
      { dateFormat: 'long', from: '2012/10/01', to: '2013/04/01', title: messages.experienceNovacomTitle, content: messages.experienceNovacomContent }
    ]
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
