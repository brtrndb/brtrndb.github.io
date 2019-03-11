import { combineReducers } from 'redux';

import types from './types';
import initialState from './initialState';

const helmetSetTitlePageReducer = (state = initialState.title, action) => {
  switch (action.type) {
    case types.HELMET_SET_TITLE_PAGE:
      return action.payload.title;
    default:
      return state;
  }
};

const reducers = combineReducers({
  title: helmetSetTitlePageReducer
});

export default reducers;
