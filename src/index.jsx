import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import App from 'Containers/App';

// Mounting point for the application.
const mountPoint = document.getElementById('app');

ReactDOM.render(<App />, mountPoint);

// Hot Module Replacement.
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}

OfflinePluginRuntime.install();
