import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as ReactIntlProvider } from 'react-intl-redux';

import locales from 'Modules/intl';

const IntlProvider = ({ children }) => <ReactIntlProvider locale={locales.primary}>{children}</ReactIntlProvider>;

IntlProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default IntlProvider;
