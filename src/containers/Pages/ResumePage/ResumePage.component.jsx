import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './ResumePage.i18n';
import { ResumePageContainer } from './ResumePage.style';

import CvSection from './CvComponents/CvSection';

const sections = [
  {
    styles: {
      direction: 'column',
      bpSection: { xs: 10, sm: 10, md: 6, lg: 4, xl: 4 },
      bpEntry: {}
    },
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
    styles: {
      direction: 'column',
      bpSection: { xs: 10, sm: 10, md: 6, lg: 4, xl: 4 },
      bpEntry: {}
    },
    icon: 'briefcase',
    title: messages.experience,
    entries: [
      { dateFormat: 'long', from: '2018/04/01', to: messages.cvEntryNow, title: messages.experienceWemanityTitle, content: messages.experienceWemanityContent },
      { dateFormat: 'long', from: '2016/10/01', to: '2018/02/01', title: messages.experienceDhatimTitle, content: messages.experienceDhatimContent },
      { dateFormat: 'long', from: '2015/03/01', to: '2016/10/01', title: messages.experienceVisianTitle, content: messages.experienceVisianContent },
      { dateFormat: 'long', from: '2014/09/01', to: '2015/03/01', title: messages.experienceSIITitle, content: messages.experienceSIIContent },
      { dateFormat: 'long', from: '2013/04/01', to: '2013/08/01', title: messages.experienceThalesTitle, content: messages.experienceThalesContent },
      { dateFormat: 'long', from: '2012/10/01', to: '2013/04/01', title: messages.experienceNovacomTitle, content: messages.experienceNovacomContent }
    ]
  },
  {
    styles: {
      direction: 'row',
      justify: 'center',
      bpSection: { xs: 10, sm: 10, md: 9, lg: 4, xl: 4 },
      bpEntry: { xs: 12, sm: 6, md: 5, lg: 12, xl: 12 }
    },
    icon: 'code',
    title: messages.skills,
    skills: [
      { icon: 'cog', title: messages.developmentTitle, content: [messages.developmentContent1, messages.developmentContent2, messages.developmentContent3] },
      { icon: ['fab', 'connectdevelop'], title: messages.innovationTitle, content: [messages.innovationContent1, messages.innovationContent2, messages.innovationContent3] },
      { icon: 'terminal', title: messages.miscTitle, content: [messages.miscContent1, messages.miscContent2, messages.miscContent3] },
      { icon: 'wrench', title: messages.toolsTitle, content: [messages.toolsContent1, messages.toolsContent2, messages.toolsContent3] }
    ]
  }
];

const toCvSection = (section) => (
  <Grid item key={section.title.id} {...section.styles.bpSection}>
    <CvSection {...section} />
  </Grid>
);

const ResumePage = () => (
  <ResumePageContainer>
    <Grid container direction='column' spacing={40}>
      <Grid item>
        <Typography variant='h2' align='center'>
          <FormattedMessage {...messages.title} />
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='center' spacing={24}>
          {sections.map(toCvSection)}
        </Grid>
      </Grid>
    </Grid>
  </ResumePageContainer>
);

export default ResumePage;
