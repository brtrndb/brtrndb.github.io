import { connect } from 'react-redux';

import Helmet from './Helmet.component';

import { helmetSelectors } from './ducks';

const mapStateToProps = (state) => ({
  title: helmetSelectors.getHelmetTitlePage(state)
});

export default connect(
  mapStateToProps,
  null
)(Helmet);
