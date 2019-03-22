import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';

import messages from './Header.i18n';
import { styles, HeaderContainer } from './Header.style';

const switchLanguage = (currentLocale, setLocale) => () => {
  setLocale(currentLocale === 'en' ? 'fr' : 'en');
};

const Header = ({ locale, setLocale, classes }) => (
  <HeaderContainer>
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Toolbar variant='dense' className={classes.toolbar}>
        <Button onClick={switchLanguage(locale, setLocale)}>
          <LanguageIcon />
          <FormattedMessage {...messages.language} />
        </Button>
      </Toolbar>
    </AppBar>
  </HeaderContainer>
);

Header.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Header);
