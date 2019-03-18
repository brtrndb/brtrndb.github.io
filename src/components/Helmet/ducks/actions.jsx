import createReduxAction from 'Utils/createReduxAction';

import types from './types';

const setTitlePageAction = (payload) => createReduxAction(types.HELMET_SET_TITLE_PAGE, payload);

const actions = {
  setTitlePageAction
};

export default actions;
