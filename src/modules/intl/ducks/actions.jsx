import { updateIntl } from 'react-intl-redux';

import i18n from '../i18n';

const setLocaleAction = (locale) => updateIntl({ locale, messages: i18n[locale] });

const actions = {
  setLocaleAction
};

export default actions;
