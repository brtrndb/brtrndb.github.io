import { updateIntl } from 'react-intl-redux';

import createReduxAction from 'Utils/createReduxAction';

import types from './types';

const setLocaleAction = (locale, messages) => updateIntl({ locale, messages });
const fetchTranslationStartAction = () => createReduxAction(types.INTL_FETCH_TRANSLATION_START, {});
const fetchTranslationSuccessAction = () => createReduxAction(types.INTL_FETCH_TRANSLATION_SUCCESS, {});
const fetchTranslationFailedAction = () => createReduxAction(types.INTL_FETCH_TRANSLATION_FAILED, {});

const actions = {
  setLocaleAction,
  fetchTranslationStartAction,
  fetchTranslationSuccessAction,
  fetchTranslationFailedAction
};

export default actions;
