import React from 'react';

import setupFontAwesome from 'Modules/fontawesome';
import intlTests, { i18nProps } from 'Tests/intlTests';

import CvSection from './CvSection';

import { dataExperience } from '../CvData/CvData';

describe('<CvComponents />', () => {
  beforeAll(() => {
    setupFontAwesome();
  });

  describe('<CvSection />', () => {
    intlTests(CvSection, i18nProps(dataExperience));
  });
});
