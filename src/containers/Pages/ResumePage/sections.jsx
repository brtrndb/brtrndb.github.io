import messages from './ResumePage.i18n';

const sectionEducation = {
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
};

const sectionExperience = {
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
};

const sectionSkills = {
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
};

const sections = [sectionEducation, sectionExperience, sectionSkills];

export { sectionEducation, sectionExperience, sectionSkills };
export default sections;
