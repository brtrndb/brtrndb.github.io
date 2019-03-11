import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { intlReducers } from 'Modules/intl';
import { helmetReducers } from 'Components/Helmet';

const setupReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    intl: intlReducers,
    helmet: helmetReducers
  });

export default setupReducers;
