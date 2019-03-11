const ALLOWED_LOCALES = ['fr'];
const USER_LOCALE = navigator.language.toLowerCase().split(/[_-]+/)[0];
const DEFAULT_LOCALE = 'fr';
const INITIAL_LOCALE = ALLOWED_LOCALES.includes(USER_LOCALE) ? USER_LOCALE : DEFAULT_LOCALE;

const locales = {
  ALLOWED_LOCALES,
  USER_LOCALE,
  DEFAULT_LOCALE,
  INITIAL_LOCALE
};

export default locales;
