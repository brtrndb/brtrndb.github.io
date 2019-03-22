import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles';

import AppContent from 'Containers/AppContent';
import setupStore from 'Modules/store';
import setupFontAwesome from 'Modules/fontawesome';
import { setupIntl } from 'Modules/intl';

import { appMuiTheme } from './App.style';

// Creating history.
const history = createBrowserHistory();

// Setting up Redux store.
const store = setupStore(history);

// Setting up Font Awesome.
setupFontAwesome();

// Setting up Intl.
setupIntl();

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <MuiThemeProvider theme={appMuiTheme}>
        <ConnectedRouter history={history}>
          <AppContent />
        </ConnectedRouter>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>
);

export default App;
