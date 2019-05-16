import React from 'react';

import setupFontAwesome from 'Modules/fontawesome';
import intlTests, { i18nProps } from 'Tests/intlTests';

import CvSkill from './CvSkill';

import { dataSkills } from '../CvData/CvData';

describe('<CvComponents />', () => {
  beforeAll(() => {
    setupFontAwesome();
  });

  describe('<CvSkill />', () => {
    intlTests(CvSkill, i18nProps(dataSkills.lines[0]));
  });
});
