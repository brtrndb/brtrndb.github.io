import React from 'react';
import loadable from '@loadable/component';

const ImportedAppContent = loadable(() => import('./AppContent.component'));
const LoadableAppContent = () => <ImportedAppContent />;

export default LoadableAppContent;
