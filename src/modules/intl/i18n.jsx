import locales from './locales';

const i18nModules = [];

const i18n = locales.ALLOWED_LOCALES.reduce((acc, locale) => {
  const localeMessages = i18nModules.reduce((messages, module) => ({ ...messages, ...module[locale] }), {});
  return { ...acc, [locale]: localeMessages };
}, {});

export default i18n;
