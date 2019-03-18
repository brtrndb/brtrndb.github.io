import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import intlReducers from 'Modules/intl/ducks/reducers';
import helmetReducers from 'Components/Helmet/ducks/reducers';

const setupReducers = (history) =>
  combineReducers({
    router: history ? connectRouter(history) : null,
    intl: intlReducers,
    helmet: helmetReducers
  });

export default setupReducers;
