import messages from './ResumePage.i18n';

import logoDhatim from './img/dhatim.png';
import logoEisti from './img/eisti.png';
import logoEpitech from './img/epitech.png';
import logoGriffith from './img/griffith.png';
import logoNovacom from './img/novacom.png';
import logoSii from './img/sii.png';
import logoThales from './img/thales.png';
import logoVisian from './img/visian.png';
import logoWemanity from './img/wemanity.png';

const sectionEducation = {
  type: 'entries',
  icon: 'graduation-cap',
  title: messages.education,
  lines: [
    { dateFormat: 'short', from: '2011/10/01', to: '2015/08/01', title: messages.educationEpitechTitle, content: messages.educationEpitechContent, image: logoEpitech },
    { dateFormat: 'short', from: '2013/09/01', to: '2014/07/01', title: messages.educationGriffithTitle, content: messages.educationGriffithContent, image: logoGriffith },
    { dateFormat: 'short', from: '2008/09/01', to: '2011/07/01', title: messages.educationEISTITitle, content: messages.educationEISTIContent, image: logoEisti },
    { dateFormat: 'short', to: '2008/07/01', title: messages.educationLyceeTitle, content: messages.educationLyceeContent }
  ],
  styles: {
    section: {
      direction: 'column',
      // justify: 'center',
      breakpoints: { xs: 10, sm: 10, md: 6, lg: 4, xl: 4 }
    },
    entry: {
      breakpoints: {}
    }
  }
};

const sectionExperience = {
  type: 'entries',
  icon: 'briefcase',
  title: messages.experience,
  lines: [
    { dateFormat: 'long', from: '2018/04/01', to: messages.cvEntryNow, title: messages.experienceWemanityTitle, content: messages.experienceWemanityContent, image: logoWemanity },
    { dateFormat: 'long', from: '2016/10/01', to: '2018/02/01', title: messages.experienceDhatimTitle, content: messages.experienceDhatimContent, image: logoDhatim },
    { dateFormat: 'long', from: '2015/03/01', to: '2016/10/01', title: messages.experienceVisianTitle, content: messages.experienceVisianContent, image: logoVisian },
    { dateFormat: 'long', from: '2014/09/01', to: '2015/03/01', title: messages.experienceSIITitle, content: messages.experienceSIIContent, image: logoSii },
    { dateFormat: 'long', from: '2013/04/01', to: '2013/08/01', title: messages.experienceThalesTitle, content: messages.experienceThalesContent, image: logoThales },
    { dateFormat: 'long', from: '2012/10/01', to: '2013/04/01', title: messages.experienceNovacomTitle, content: messages.experienceNovacomContent, image: logoNovacom }
  ],
  styles: {
    section: {
      direction: 'column',
      // justify: 'center',
      breakpoints: { xs: 10, sm: 10, md: 6, lg: 4, xl: 4 }
    },
    entry: {
      breakpoints: {}
    }
  }
};

const sectionSkills = {
  type: 'skills',
  icon: 'code',
  title: messages.skills,
  lines: [
    { icon: 'cog', title: messages.developmentTitle, content: [messages.developmentContent1, messages.developmentContent2, messages.developmentContent3] },
    { icon: ['fab', 'connectdevelop'], title: messages.innovationTitle, content: [messages.innovationContent1, messages.innovationContent2, messages.innovationContent3] },
    { icon: 'terminal', title: messages.miscTitle, content: [messages.miscContent1, messages.miscContent2, messages.miscContent3] },
    { icon: 'wrench', title: messages.toolsTitle, content: [messages.toolsContent1, messages.toolsContent2, messages.toolsContent3] }
  ],
  styles: {
    section: {
      direction: 'row',
      justify: 'center',
      breakpoints: { xs: 10, sm: 10, md: 9, lg: 4, xl: 4 }
    },
    entry: {
      breakpoints: { xs: 12, sm: 6, md: 5, lg: 12, xl: 12 }
    }
  }
};

const sections = [sectionEducation, sectionExperience, sectionSkills];

export { sectionEducation, sectionExperience, sectionSkills };
export default sections;
