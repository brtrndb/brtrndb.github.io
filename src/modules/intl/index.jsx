import { addLocaleData } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';

import i18n from './i18n';

addLocaleData(frLocaleData);

export { intlInitialState } from './ducks';
export { intlSelectors } from './ducks';
export { intlOperations } from './ducks';
export { default as intlReducers } from './ducks';

export default i18n;
