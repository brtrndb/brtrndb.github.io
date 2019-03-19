import configureStore from 'redux-mock-store';

import setupInitialState from 'Modules/store/setupInitialState';

const middlewares = [];
const mockStore = configureStore(middlewares);
const appInitialState = setupInitialState();
const reducersInitialState = { ...appInitialState, intl: { locale: 'en', messages: {} } };
const mockedStore = mockStore(appInitialState);
const reducersMockedStore = mockStore(reducersInitialState);

export { reducersMockedStore };
export default mockedStore;
