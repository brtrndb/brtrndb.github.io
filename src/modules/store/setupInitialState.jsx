import intlInitialState from 'Modules/intl/ducks/initialState';
import helmetInitialState from 'Components/Helmet/ducks/initialState';

const setupInitialState = () => ({
  intl: intlInitialState,
  helmet: helmetInitialState
});

export default setupInitialState;
