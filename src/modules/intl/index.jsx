import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

import i18n from './i18n';

addLocaleData(enLocaleData);

export { intlInitialState } from './ducks';
export { intlSelectors } from './ducks';
export { intlOperations } from './ducks';
export { default as intlReducers } from './ducks';

export default i18n;
