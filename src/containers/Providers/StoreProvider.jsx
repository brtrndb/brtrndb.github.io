import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import history from 'Modules/history';
import setupStore from 'Modules/store';

const StoreProvider = ({ children }) => <Provider store={setupStore(history)}>{children}</Provider>;

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default StoreProvider;
