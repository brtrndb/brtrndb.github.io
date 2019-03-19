import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { helmetInitialState } from './ducks';

const Helmet = ({ title, charset }) => (
  <ReactHelmet>
    <title>{title}</title>
    <meta charSet={charset} />
  </ReactHelmet>
);

Helmet.propTypes = {
  title: PropTypes.string,
  charset: PropTypes.string
};

Helmet.defaultProps = {
  title: helmetInitialState.title,
  charset: 'UTF-8'
};

export default Helmet;
