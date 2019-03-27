import React from 'react';
import loadable from '@loadable/component';

const ImportedResumePage = loadable(() => import('./ResumePage.component'));
const LoadableResumePage = () => <ImportedResumePage />;

export default LoadableResumePage;
