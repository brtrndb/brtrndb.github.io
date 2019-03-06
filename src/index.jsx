import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Mounting point for the application.
const mountPoint = document.getElementById('app');

ReactDOM.render(<App />, mountPoint);

// Hot Module Replacement.
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}
