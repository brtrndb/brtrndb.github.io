import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { helmetReducers } from 'Components/Helmet';

const setupReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    helmet: helmetReducers
  });

export default setupReducers;
