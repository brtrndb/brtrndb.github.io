import React from 'react';

import intlTests, { i18nProps } from 'Tests/intlTests';

import CvEntry from './CvEntry';

import { dataExperience } from '../CvData/CvData';

describe('<CvComponents />', () => {
  describe('<CvEntry />', () => {
    intlTests(CvEntry, i18nProps(dataExperience.lines[0]));
  });
});
