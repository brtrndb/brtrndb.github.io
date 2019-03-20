const messages = {
  welcome: 'pages.homepage.welcome',
  my_name: 'pages.homepage.my_name',
  i_am: 'pages.homepage.i_am',
  i_try: 'pages.homepage.i_try'
};

const i18n = {
  en: {
    [messages.welcome]: 'Hello world.',
    [messages.my_name]: 'My name is Bertrand.',
    [messages.i_am]: 'I am a good developer.',
    [messages.i_try]: 'Or at least, I try to be.'
  },
  fr: {
    [messages.welcome]: 'Hello world.',
    [messages.my_name]: "Je m'appelle Bertrand.",
    [messages.i_am]: 'Je suis un bon dev.',
    [messages.i_try]: "Du moins, j'essaie."
  }
};

export { messages };
export default i18n;
