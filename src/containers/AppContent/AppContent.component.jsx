import React from 'react';

import Routes from 'Containers/Routes';
import Helmet from 'Components/Helmet';

const AppContent = () => (
  <div>
    <Helmet />
    <Routes baseurl='/' />
  </div>
);

export default AppContent;
