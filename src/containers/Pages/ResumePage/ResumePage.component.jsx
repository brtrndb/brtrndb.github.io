import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './ResumePage.i18n';
import { ResumePageContainer } from './ResumePage.style';

import CvSection from './CvComponents/CvSection';
import CvEntry from './CvComponents/CvEntry';
import CvSkill from './CvComponents/CvSkill';

const sections = [
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
    skills: [
      { icon: 'cog', title: messages.developmentTitle, content: [messages.developmentContent1, messages.developmentContent2, messages.developmentContent3] },
      { icon: ['fab', 'connectdevelop'], title: messages.innovationTitle, content: [messages.innovationContent1, messages.innovationContent2, messages.innovationContent3] },
      { icon: 'terminal', title: messages.miscTitle, content: [messages.miscContent1, messages.miscContent2, messages.miscContent3] },
      { icon: 'wrench', title: messages.toolsTitle, content: [messages.toolsContent1, messages.toolsContent2, messages.toolsContent3] }
    ]
  }
];

const toCvEntry = (entry) => (
  <Grid item key={entry.title.id}>
    <CvEntry {...entry} />
  </Grid>
);

const toCvSkill = (skill) => (
  <Grid item key={skill.title.id}>
    <CvSkill {...skill} />
  </Grid>
);

const toCvSection = (section) => (
  <Grid item key={section.title.id}>
    <CvSection icon={section.icon} title={section.title}>
      <Grid container direction='column'>
        {section.entries ? section.entries.map(toCvEntry) : null}
        {section.skills ? section.skills.map(toCvSkill) : null}
      </Grid>
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
        <Grid container direction='row'>
          {sections.map(toCvSection)}
        </Grid>
      </Grid>
    </Grid>
  </ResumePageContainer>
);

export default ResumePage;
