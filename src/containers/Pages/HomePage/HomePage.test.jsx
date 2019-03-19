import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider, injectIntl } from 'react-intl';

import i18n from 'Modules/intl/i18n';

import HomePage from './HomePage.component';

describe('<HomePage />', () => {
  describe('Rendering component', () => {
    Object.keys(i18n).forEach((language) => {
      test(`HomePage rendering for ${language.toUpperCase()}`, () => {
        const component = renderer.create(
          <IntlProvider locale={language} messages={i18n[language]}>
            <HomePage />
          </IntlProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
