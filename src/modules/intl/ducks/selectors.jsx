export const getLocale = (state) => state.intl.locale;
export const getMessages = (state) => state.intl.messages;

const selectors = { getLocale, getMessages };

export default selectors;
