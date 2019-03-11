import createReduxAction from 'Utils/createReduxAction';

import types from './types';

const setTitlePageAction = (title) => createReduxAction(types.HELMET_SET_TITLE_PAGE, { title });

const actions = {
  setTitlePageAction
};

export default actions;
