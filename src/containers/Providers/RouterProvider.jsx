import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';

import history from 'Modules/history';

const RouterProvider = ({ children }) => <ConnectedRouter history={history}>{children}</ConnectedRouter>;

RouterProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default RouterProvider;
