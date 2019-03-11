import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const setupReducers = (history) =>
  combineReducers({
    router: connectRouter(history)
  });

export default setupReducers;
