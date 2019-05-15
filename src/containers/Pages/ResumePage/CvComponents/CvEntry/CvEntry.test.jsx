import React from 'react';

import intlTests, { i18nProps } from 'Tests/intlTests';

import CvEntry from './CvEntry';

import { sectionExperience } from '../../sections';

describe('<CvComponents />', () => {
  describe('<CvEntry />', () => {
    intlTests(CvEntry, i18nProps(sectionExperience.lines[0]));
  });
});
