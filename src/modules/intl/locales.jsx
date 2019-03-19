const ALLOWED_LOCALES = ['en'];
const DEFAULT_LOCALE = 'en';
const USER_LOCALE = navigator.language.toLowerCase().split(/[_-]+/)[0];
const INITIAL_LOCALE = ALLOWED_LOCALES.includes(USER_LOCALE) ? USER_LOCALE : DEFAULT_LOCALE;

const locales = {
  ALLOWED_LOCALES,
  DEFAULT_LOCALE,
  USER_LOCALE,
  INITIAL_LOCALE
};

export default locales;
