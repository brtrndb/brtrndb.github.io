import React from 'react';
import PropTypes from 'prop-types';

import StoreProvider from './StoreProvider';
import IntlProvider from './IntlProvider';
import UiProvider from './UiProvider';
import RouterProvider from './RouterProvider';

const RootProvider = ({ children }) => (
  <StoreProvider>
    <IntlProvider>
      <UiProvider>
        <RouterProvider>{children}</RouterProvider>
      </UiProvider>
    </IntlProvider>
  </StoreProvider>
);

RootProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default RootProvider;
