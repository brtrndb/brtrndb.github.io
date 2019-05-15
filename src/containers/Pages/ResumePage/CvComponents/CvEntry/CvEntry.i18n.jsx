import { defineMessages } from 'react-intl';

export const scope = 'pages.resumepage';

const messages = defineMessages({
  cvEntryDate: {
    id: `${scope}.internal.cventry.date`,
    defaultMessage: '{from}{arrow}{to}'
  },
  cvEntryNow: {
    id: `${scope}.internal.cventry.now`,
    defaultMessage: 'Now'
  }
});

export default messages;
