import { intlInitialState } from 'Modules/intl';
import { helmetInitialState } from 'Components/Helmet';

const setupInitialState = () => ({
  intl: intlInitialState,
  helmet: helmetInitialState
});

export default setupInitialState;
