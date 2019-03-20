import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider, injectIntl } from 'react-intl';

import i18n from 'Modules/intl/i18n';

const setupIntlTests = (Component, props) => {
  describe('Rendering component', () => {
    Object.keys(i18n).forEach((locale) => {
      test(`Rendering with locale ${locale.toUpperCase()}`, () => {
        const component = renderer.create(
          <IntlProvider locale={locale} messages={i18n[locale]}>
            <Component {...props[locale]} />
          </IntlProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
};

const intlTests = (component, props) => {
  setupIntlTests(component, props || {});
};

export default intlTests;
