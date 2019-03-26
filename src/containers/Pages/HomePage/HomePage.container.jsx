import React from 'react';
import loadable from '@loadable/component';

const ImportedHomePage = loadable(() => import('./HomePage.component'));
const LoadableHomePage = () => <ImportedHomePage />;

export default LoadableHomePage;
