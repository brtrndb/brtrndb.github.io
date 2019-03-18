import actions from './actions';

const setLocale = (dispatch) => (locale) => {
  dispatch(actions.setLocaleAction(locale));
};

const operations = {
  setLocale
};

export default operations;
