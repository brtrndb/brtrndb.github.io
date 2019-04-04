import React from 'react';

import setupFontAwesome from 'Modules/fontawesome';
import intlTests, { i18nProps } from 'Tests/intlTests';

import CvEntry from './CvEntry';
import CvSkill from './CvSkill';
import CvSection from './CvSection';

import { sectionExperience, sectionSkills } from '../sections';

describe('<CvComponents />', () => {
  beforeAll(() => {
    setupFontAwesome();
  });

  describe('<CvEntry />', () => {
    intlTests(CvEntry, i18nProps(sectionExperience.entries[0]));
  });

  describe('<CvSkill />', () => {
    intlTests(CvSkill, i18nProps(sectionSkills.skills[0]));
  });

  describe('<CvSection />', () => {
    intlTests(CvSection, i18nProps(sectionExperience));
  });
});
