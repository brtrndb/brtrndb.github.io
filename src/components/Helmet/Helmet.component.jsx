import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title, charset }) => (
  <div>
    <ReactHelmet>
      <title>{title}</title>
      <meta charSet={charset} />
    </ReactHelmet>
  </div>
);

export default Helmet;
