import React from 'react';

import intlTests from 'Tests/intlTests';

import Header from './Header.component';

describe('<Header />', () => {
  const props = {
    en: { locale: 'en', setLocale: () => {} },
    fr: { locale: 'fr', setLocale: () => {} }
  };
  intlTests(Header, props);
});
