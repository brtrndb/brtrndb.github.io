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
  ...educationMessages,
  ...experienceMessages,
  ...skillsMessages
});

export default messages;
