import React from 'react';

import reduxTests from 'Tests/reduxTests';

import types from './ducks/types';
import selectors from './ducks/selectors';
import actions from './ducks/actions';
import initialState from './ducks/initialState';

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
});
