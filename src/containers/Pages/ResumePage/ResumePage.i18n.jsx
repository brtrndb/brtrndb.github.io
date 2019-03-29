import React from 'react';
import { defineMessages } from 'react-intl';

export const scope = 'pages.resumepage';
export const scopeEducation = `${scope}.section.education`;
export const scopeExperience = `${scope}.section.experience`;
export const scopeSkills = `${scope}.section.skills`;

const titleFormat = '{place}, {status}, {location}';

const educationMessages = {
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
    defaultMessage: "Master's degree in Information Technologies"
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
    defaultMessage: 'First year of Master in Computing with Business & Management options'
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
    defaultMessage: "First year of Bachelor's degree in Maths & Computing"
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
    defaultMessage: 'Science Baccalaureate with Maths & Engineering option'
  }
};

const experienceMessages = {
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat eleifend est, quis volutpat tortor dignissim non. Fusce arcu leo, lacinia nec ultrices a, tincidunt in eros. Curabitur consectetur magna est, et pellentesque arcu aliquam in. Ut ligula ipsum, dapibus et dapibus non, tincidunt in arcu.'
  },
  experienceDhatimTitle: {
    id: `${scopeExperience}.dhatim.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Dhatim</b>,
      status: <i>R&D Java Developper</i>,
      location: 'Paris (France)'
    }
  },
  experienceDhatimContent: {
    id: `${scopeExperience}.dhatim.content`,
    defaultMessage:
      'Sed ornare dolor in leo sagittis, quis tincidunt risus ultricies. Phasellus sit amet nulla at nisl dictum pulvinar. Integer vel erat mi. Vivamus metus sem, ultrices et ligula eget, malesuada pharetra leo. Nam finibus metus eu porta sodales.'
  },
  experienceVisianTitle: {
    id: `${scopeExperience}.visian.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Visian</b>,
      status: <i>Lead Developper & Fablab Supervisor</i>,
      location: 'Paris (France)'
    }
  },
  experienceVisianContent: {
    id: `${scopeExperience}.visian.content`,
    defaultMessage:
      'Proin nec aliquet odio, vitae commodo dolor. Integer orci nulla, luctus id risus sit amet, sagittis molestie justo. Curabitur et dui et turpis efficitur mollis vulputate id justo. Cras sodales cursus lorem, id porttitor magna porta id.'
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
    defaultMessage: 'Quisque tincidunt metus congue tellus pharetra, id rhoncus eros tempor. Nullam commodo eleifend metus ac varius. Nam eget enim sit amet mi malesuada auctor ac ac nisl.'
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
      'Curabitur fringilla mauris at tortor faucibus venenatis. Etiam porttitor aliquam dictum. Integer elementum mi ac orci ultricies viverra. Curabitur turpis enim, dapibus nec mauris vitae, auctor ultrices justo. '
  },
  experienceNovacomTitle: {
    id: `${scopeExperience}.novacom.title`,
    defaultMessage: titleFormat,
    values: {
      place: <b>Novacom</b>,
      status: <i>Java Developper Trainee</i>,
      location: 'Paris (France)'
    }
  },
  experienceNovacomContent: {
    id: `${scopeExperience}.novacom.content`,
    defaultMessage:
      'Suspendisse hendrerit magna posuere leo ultrices, ut maximus diam convallis. Pellentesque vel felis arcu. Donec quis urna libero. Suspendisse sagittis turpis at leo lobortis porttitor. Sed eget nulla sollicitudin, fermentum nisi non, ultricies neque.'
  }
};

const skillsMessages = {
  skills: {
    id: `${scopeSkills}.title`,
    defaultMessage: 'Skills'
  }
};

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Resume'
  },
  now: {
    id: `${scope}.section.now`,
    defaultMessage: 'Now'
  },
  ...educationMessages,
  ...experienceMessages,
  ...skillsMessages
});

export default messages;
