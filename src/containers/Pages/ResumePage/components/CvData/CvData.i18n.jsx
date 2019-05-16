import React from 'react';
import { defineMessages } from 'react-intl';

export const scope = 'pages.resumepage.section';
export const scopeEducation = `${scope}.education`;
export const scopeExperience = `${scope}.experience`;
export const scopeSkills = `${scope}.skills`;

const titleFormat = '{place}, {status}, {location}.';

const educationMessages = defineMessages({
  education: {
    id: `${scopeEducation}.title`,
    defaultMessage: 'Education'
  },
  educationEpitechTitle: {
    id: `${scopeEducation}.epitech.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Epitech</b>,
      status: <i>Bachelor/Master</i>,
      location: 'Toulouse/Paris (France)'
    }
  },
  educationEpitechContent: {
    id: `${scopeEducation}.epitech.content`,
    defaultMessage: "Master's degree in Information Technologies."
  },
  educationGriffithTitle: {
    id: `${scopeEducation}.griffith.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Griffith College Dublin</b>,
      status: <i>Master</i>,
      location: 'Dublin (Ireland)'
    }
  },
  educationGriffithContent: {
    id: `${scopeEducation}.griffith.content`,
    defaultMessage: 'First year of Master in Computing with Business & Management option.'
  },
  educationEISTITitle: {
    id: `${scopeEducation}.eisti.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>EISTI</b>,
      status: <i>Preparatory classes</i>,
      location: 'Pau (France)'
    }
  },
  educationEISTIContent: {
    id: `${scopeEducation}.eisti.content`,
    defaultMessage: "First year of Bachelor's degree in Maths & Computing."
  },
  educationLyceeTitle: {
    id: `${scopeEducation}.lycee.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Lycée Vauvenargues</b>,
      status: <i>Baccalaureate</i>,
      location: 'Aix-en-Provence (France)'
    }
  },
  educationLyceeContent: {
    id: `${scopeEducation}.lycee.content`,
    defaultMessage: 'Science Baccalaureate with Maths and Engineering options.'
  }
});

const experienceMessages = defineMessages({
  experience: {
    id: `${scopeExperience}.title`,
    defaultMessage: 'Experience'
  },
  experienceWemanityTitle: {
    id: `${scopeExperience}.wemanity.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Wemanity</b>,
      status: <i>Agile Consultant Developer R&D</i>,
      location: 'Paris (France)'
    }
  },
  experienceWemanityContent: {
    id: `${scopeExperience}.wemanity.content`,
    defaultMessage:
      "Fullstack R&D developer at the Société Générale's Innovation Lab Innov8. In charge of developments of innovative prototypes and demonstrator incorporating 3D/VR, cognitive services, smart home or robots for internal use cases. Stack: ES6, ReactJS, Three.js, Loopback, Python, Docker, OpenShift."
  },
  experienceDhatimTitle: {
    id: `${scopeExperience}.dhatim.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Dhatim</b>,
      status: <i>R&D Java Developer</i>,
      location: 'Paris (France)'
    }
  },
  experienceDhatimContent: {
    id: `${scopeExperience}.dhatim.content`,
    defaultMessage:
      'Backend developer for Conciliator For Pay, SaaS solution for French pay control quality. Team of 5 persons: 2 frontend, 2 backend, 1 PO working in Scrum methodology. Stack: Java 8 SE, Dropwizard, PostgreSQL, Docker, Git, Jenkins.'
  },
  experienceVisianTitle: {
    id: `${scopeExperience}.visian.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Visian</b>,
      status: <i>Lead Developer & Fablab Supervisor</i>,
      location: 'Paris (France)'
    }
  },
  experienceVisianContent: {
    id: `${scopeExperience}.visian.content`,
    defaultMessage:
      "Lead developer at Visian, Neurones IT's Business Unit specialised in prototyping use cases using IoT. In charge of the developers' team. Building proof of concept (PoC) from scratch or using various kind of IoT (mobile, beacons, wearables, Raspberry, NFC, sensors...), and transmitting data into the cloud."
  },
  experienceSIITitle: {
    id: `${scopeExperience}.sii.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>SII</b>,
      status: <i>Head Of Innovation Assistant</i>,
      location: 'Paris (France)'
    }
  },
  experienceSIIContent: {
    id: `${scopeExperience}.sii.content`,
    defaultMessage:
      "Study of open source drones like the Crazyflie project and hardware customisation. Prototyping an embedded case for cooling trucks using a Raspberry Pi and various sensors (temperature, pressure, GPS...), data are transmitted over MQTT to the driver's phone. Stack: C, Java 8 ME for IoT, MQTT."
  },
  experienceThalesTitle: {
    id: `${scopeExperience}.thales.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Thales</b>,
      status: <i>Intern DevOps</i>,
      location: 'Paris (France)'
    }
  },
  experienceThalesContent: {
    id: `${scopeExperience}.thales.content`,
    defaultMessage:
      'In charge of the study, install and deployment of OpenStack in a test environment. Writing documentation for users, deployment scripts (Bash), VM image templates, tests and validations.'
  },
  experienceNovacomTitle: {
    id: `${scopeExperience}.novacom.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Novacom</b>,
      status: <i>Java Developer Trainee</i>,
      location: 'Paris (France)'
    }
  },
  experienceNovacomContent: {
    id: `${scopeExperience}.novacom.content`,
    defaultMessage: 'Java internship, attached to the developers team. Development of unit and functionnal tests with the correct dataset.'
  }
});

const skillsMessages = defineMessages({
  skills: {
    id: `${scopeSkills}.title`,
    defaultMessage: 'Skills'
  },
  developmentTitle: {
    id: `${scopeSkills}.dev.title`,
    defaultMessage: 'Development'
  },
  developmentContent1: {
    id: `${scopeSkills}.dev.content.line1`,
    defaultMessage: 'Java 8 SE, ReactJS, ES6, C/C++.'
  },
  developmentContent2: {
    id: `${scopeSkills}.dev.content.line2`,
    defaultMessage: 'Python & Lisp/Scheme basic knowledges.'
  },
  developmentContent3: {
    id: `${scopeSkills}.dev.content.line3`,
    defaultMessage: 'Mobile development bases: Android & iOS (Swift).'
  },
  miscTitle: {
    id: `${scopeSkills}.misc.title`,
    defaultMessage: 'Misc'
  },
  miscContent1: {
    id: `${scopeSkills}.misc.content1`,
    defaultMessage: 'Shell scripts, Docker, Microsoft Azure.'
  },
  miscContent2: {
    id: `${scopeSkills}.misc.content2`,
    defaultMessage: 'SQL databases (PostgreSQL).'
  },
  miscContent3: {
    id: `${scopeSkills}.misc.content3`,
    defaultMessage: 'Comfortable with Linux & Windows environment.'
  },
  innovationTitle: {
    id: `${scopeSkills}.innovation.title`,
    defaultMessage: 'Innovation'
  },
  innovationContent1: {
    id: `${scopeSkills}.innovation.content1`,
    defaultMessage: 'Raspberry Pi, Beacons, Android Wear.'
  },
  innovationContent2: {
    id: `${scopeSkills}.innovation.content2`,
    defaultMessage: 'Chatbots, Speech To Text, NLU, OCR, ML.'
  },
  innovationContent3: {
    id: `${scopeSkills}.innovation.content3`,
    defaultMessage: 'Drones, robots, VR and 3D printing.'
  },
  toolsTitle: {
    id: `${scopeSkills}.tools.title`,
    defaultMessage: 'Tools'
  },
  toolsContent1: {
    id: `${scopeSkills}.tools.content1`,
    defaultMessage: 'Atom, Eclipse, Visual Studio, DataGrip.'
  },
  toolsContent2: {
    id: `${scopeSkills}.tools.content2`,
    defaultMessage: 'Git[Hub|Lab], Subversion, Maven, Makefile.'
  },
  toolsContent3: {
    id: `${scopeSkills}.tools.content3`,
    defaultMessage: 'Jenkins, Jira, agile methodologies, TDD.'
  }
});

const internalMessages = defineMessages({
  cvEntryNow: {
    id: `${scope}.internal.cventry.now`,
    defaultMessage: 'Now'
  }
});

const messages = {
  ...educationMessages,
  ...experienceMessages,
  ...skillsMessages,
  ...internalMessages
};

export { educationMessages, experienceMessages, skillsMessages };
export default messages;
