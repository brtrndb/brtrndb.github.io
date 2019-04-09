import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';

import appMuiTheme from 'Modules/style';

const UiProvider = ({ children }) => <ThemeProvider theme={appMuiTheme}>{children}</ThemeProvider>;

UiProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default UiProvider;
