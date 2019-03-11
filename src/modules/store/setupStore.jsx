import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import setupReducers from './setupReducers';
import setupInitialState from './setupInitialState';

const isProd = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod';

const setupMiddlewares = (history) => {
  const reduxRouterMiddleware = routerMiddleware(history);
  if (isProd) {
    return [reduxRouterMiddleware];
  }
  return [reduxRouterMiddleware, logger];
};

const setupEnhancers = (middlewares) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = !isProd && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  /* eslint-enable */
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  return enhancers;
};

const setupStore = (history) => {
  const reducers = setupReducers(history);
  const initialState = setupInitialState();
  const middlewares = setupMiddlewares(history);
  const enhancers = setupEnhancers(middlewares);
  const store = createStore(reducers, initialState, enhancers);

  // Enable Webpack hot module replacement for reducers.
  if (!isProd && module.hot) {
    module.hot.accept('./setupReducers', () => {
      const nextReducer = require('./setupReducers').default(history); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default setupStore;
