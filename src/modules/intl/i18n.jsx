import i18nHeader from 'Components/Header/Header.i18n';
import i18nHomePage from 'Containers/Pages/HomePage/HomePage.i18n';

import locales from './locales';

const i18nModules = [i18nHeader, i18nHomePage];

const i18n = locales.ALLOWED_LOCALES.reduce((acc, locale) => {
  const localeMessages = i18nModules.reduce((messages, module) => ({ ...messages, ...module[locale] }), {});
  return { ...acc, [locale]: localeMessages };
}, {});

export default i18n;
