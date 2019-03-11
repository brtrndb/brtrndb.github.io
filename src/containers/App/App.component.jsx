import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import AppContent from 'Containers/AppContent';
import setupStore from 'Modules/store';

// Creating history.
const history = createBrowserHistory();

// Setting up Redux store.
const store = setupStore(history);

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <AppContent />
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
);

export default App;
