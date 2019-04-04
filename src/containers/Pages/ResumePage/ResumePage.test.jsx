import React from 'react';

import setupFontAwesome from 'Modules/fontawesome';
import intlTests from 'Tests/intlTests';

import ResumePage from './ResumePage.component';

describe('<ResumePage />', () => {
  setupFontAwesome();
  intlTests(ResumePage);
});
