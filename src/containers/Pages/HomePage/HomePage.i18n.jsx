import { defineMessages } from 'react-intl';

export const scope = 'pages.homepage';

const messages = defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Hello World'
  },
  my_name: {
    id: `${scope}.my_name`,
    defaultMessage: 'My name is Bertrand.'
  },
  i_am: {
    id: `${scope}.i_am`,
    defaultMessage: 'I am a good developer.'
  },
  i_try: {
    id: `${scope}.i_try`,
    defaultMessage: 'Or at least, I try to be.'
  },
  btnResume: {
    id: `${scope}.button.resume`,
    defaultMessage: 'See my resume'
  }
});

export default messages;
