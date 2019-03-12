import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title, charset }) => (
  <ReactHelmet>
    <title>{title}</title>
    <meta charSet={charset} />
  </ReactHelmet>
);

export default Helmet;
