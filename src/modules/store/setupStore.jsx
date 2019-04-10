import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import setupReducers from './setupReducers';
import setupInitialState from './setupInitialState';

const setupMiddlewares = (history) => {
  const middlewares = [];
  const reduxRouterMiddleware = routerMiddleware(history);
  middlewares.push(reduxRouterMiddleware);
  if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger'); // eslint-disable-line
    middlewares.push(logger);
  }
  return middlewares;
};

const setupEnhancers = (middlewares) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
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
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./setupReducers', () => {
      const nextReducer = require('./setupReducers').default(history); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default setupStore;
