import { connect } from 'react-redux';

import { intlSelectors, intlOperations } from 'Modules/intl';

import Header from './Header.component';

const mapStateToProps = (state) => ({
  locale: intlSelectors.getLocale(state)
});

const mapDispatchToProps = (dispatch) => ({
  setLocale: (locale) => {
    intlOperations.setLocale(dispatch)(locale);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
