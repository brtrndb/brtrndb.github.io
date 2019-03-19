import React from 'react';
import renderer from 'react-test-renderer';

import i18n from 'Modules/intl/i18n';
import reduxTests from 'Tests/reduxTests';

import types from './ducks/types';
import selectors from './ducks/selectors';
import actions from './ducks/actions';
import initialState from './ducks/initialState';

import Helmet from './Helmet.component';

describe('<Helmet />', () => {
  const reduxTestsData = {
    selectors,
    actions,
    selectorsData: {
      names: ['getHelmetTitlePage'],
      getHelmetTitlePage: {
        expectedValue: () => initialState.title
      }
    },
    actionsData: {
      names: ['setTitlePageAction'],
      setTitlePageAction: {
        type: () => types.HELMET_SET_TITLE_PAGE,
        payload: () => ({ title: 'Title test' }),
        expectedAction: () => ({ type: types.HELMET_SET_TITLE_PAGE, payload: { title: 'Title test' } }),
        selectorName: 'getHelmetTitlePage'
      }
    },
    reducersData: {
      pairs: [{ action: 'setTitlePageAction', selector: 'getHelmetTitlePage' }]
    }
  };

  reduxTests(reduxTestsData);

  describe('Rendering component', () => {
    Object.keys(i18n).forEach((language) => {
      test(`Helmet rendering for ${language.toUpperCase()}`, () => {
        const component = renderer.create(<Helmet />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
