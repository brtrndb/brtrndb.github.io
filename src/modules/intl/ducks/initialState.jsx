import i18n from '../i18n';
import locales from '../locales';

const initialState = {
  locale: locales.INITIAL_LOCALE,
  messages: i18n[locales.INITIAL_LOCALE]
};

export default initialState;
