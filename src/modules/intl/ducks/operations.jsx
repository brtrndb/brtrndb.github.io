import { updateIntl } from 'react-intl-redux';

import i18n from '../i18n';

const setLocale = (dispatch) => (locale) => {
  const messages = i18n[locale];
  dispatch(updateIntl({ locale, messages }));
};

const operations = { setLocale };

export default operations;
