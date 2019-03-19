import { createBrowserHistory } from 'history';

import setupReducers from 'Modules/store/setupReducers';
import createReduxAction from 'Utils/createReduxAction';

import mockedStore, { reducersMockedStore } from './mockedStore';

const setupReduxSelectorsTests = (selectors, selectorsData) => {
  describe('Selectors', () => {
    selectorsData.names.forEach((name) => {
      test(`Should return the state value for ${name}`, () => {
        const value = selectors[name](mockedStore.getState());
        const expectedValue = selectorsData[name].expectedValue();
        expect(value).toEqual(expectedValue);
      });
    });
  });
};

const setupReduxActionsTests = (actions, actionsData) => {
  describe('Actions', () => {
    actionsData.names.forEach((name) => {
      test(`Should create an action for ${name}`, () => {
        const payload = actionsData[name].payload();
        const action = actions[name](payload);
        const expectedAction = actionsData[name].expectedAction();
        expect(action).toEqual(expectedAction);
      });
    });
  });
};

const setupReduxReducersTests = (selectors, actions, selectorsData, actionsData, reducersData) => {
  describe('Reducers', () => {
    beforeEach(() => {
      mockedStore.clearActions();
    });

    test('Should return the initial state when store state is undefined.', () => {
      const reducers = setupReducers();
      const newState = reducers(undefined, {});
      expect(newState).toEqual(reducersMockedStore.getState());
    });

    test('Should return the initial state when unknown action is dispatched.', () => {
      const reducers = setupReducers();
      const newState = reducers(reducersMockedStore.getState(), createReduxAction('UNKNOWN_ACTION', { data: 0 }));
      expect(newState).toEqual(reducersMockedStore.getState());
    });

    reducersData.pairs.forEach((data) => {
      test(`Should update the state when action ${data.action} is dispatched.`, () => {
        const action = actions[data.action](actionsData[data.action].payload());
        mockedStore.dispatch(action);
        expect(mockedStore.getActions()).toEqual([action]);
        const selector = selectors[data.selector];
        expect(selector(mockedStore.getState())).toEqual(selectorsData[data.selector].expectedValue());
      });
    });
  });
};

const reduxTests = (reduxTestsData) => {
  const { selectors, actions, selectorsData, actionsData, reducersData } = reduxTestsData;

  setupReduxSelectorsTests(selectors, selectorsData);
  setupReduxActionsTests(actions, actionsData);
  setupReduxReducersTests(selectors, actions, selectorsData, actionsData, reducersData);
};

export default reduxTests;
