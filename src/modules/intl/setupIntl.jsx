import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';

const setupIntl = () => {
  addLocaleData(frLocaleData);
  addLocaleData(enLocaleData);
};

export default setupIntl;
