import axios from 'Modules/axios';

import actions from './actions';
import setupIntl from '../setupIntl';

const setLocale = (dispatch) => (locale) => {
  dispatch(actions.fetchTranslationStartAction());

  const onSuccess = (response) => {
    dispatch(actions.fetchTranslationSuccessAction());
    setupIntl(locale);
    dispatch(actions.setLocaleAction(locale, response.data));
  };

  const onError = (error) => {
    console.log(error);
    dispatch(actions.fetchTranslationFailedAction());
  };

  axios
    .get(`/${locale}.json`)
    .then(onSuccess)
    .catch(onError);
};

const operations = {
  setLocale
};

export default operations;
