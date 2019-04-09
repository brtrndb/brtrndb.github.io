import React from 'react';

import { setupIntl } from 'Modules/intl';
import setupFontAwesome from 'Modules/fontawesome';

import RootProvider from 'Containers/Providers';
import AppContent from 'Containers/AppContent';

// Setting up Intl.
setupIntl();
// Setting up Font Awesome.
setupFontAwesome();

const App = () => (
  <RootProvider>
    <AppContent />
  </RootProvider>
);

export default App;
