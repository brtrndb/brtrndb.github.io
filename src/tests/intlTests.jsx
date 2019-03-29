import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';

import locales from 'Modules/intl/locales';

const setupIntlTests = (Component, props) => {
  describe('Rendering component', () => {
    Object.keys(locales.allowed).forEach((locale) => {
      const i18n = require(`../modules/intl/i18n/${locale}.json`);
      test(`Rendering with locale ${locale.toUpperCase()}`, () => {
        const component = renderer.create(
          <IntlProvider locale={locale} messages={i18n}>
            <MemoryRouter>
              <Component {...props[locale]} />
            </MemoryRouter>
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
