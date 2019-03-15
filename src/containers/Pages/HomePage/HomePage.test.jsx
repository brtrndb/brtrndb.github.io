import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider, injectIntl } from 'react-intl';

import i18n from 'Modules/intl';
import HomePage from './HomePage.component';

describe('<HomePage/>', () => {
  test('HomePage rendering EN', () => {
    const component = renderer.create(
      <IntlProvider locale='en' messages={i18n.en}>
        <HomePage />
      </IntlProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
