import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';

import appMuiTheme from 'Modules/style';
import locales from 'Modules/intl/locales';

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
});

const i18nProps = (props) =>
  Object.keys(locales.allowed).reduce((acc, locale) => {
    return { ...acc, [locale]: props };
  }, {});

const setupIntlTests = (Component, props) => {
  describe('Rendering component', () => {
    Object.keys(locales.allowed).forEach((locale) => {
      const i18n = require(`../modules/intl/i18n/${locale}.json`);
      test(`Rendering with locale ${locale.toUpperCase()}`, () => {
        const component = renderer.create(
          <IntlProvider locale={locale} messages={i18n}>
            <ThemeProvider theme={appMuiTheme}>
              <MemoryRouter>
                <Component {...props[locale]} />
              </MemoryRouter>
            </ThemeProvider>
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

export { i18nProps };
export default intlTests;
