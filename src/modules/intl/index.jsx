import PropTypes from 'prop-types';

export { intlInitialState } from './ducks';
export { intlSelectors } from './ducks';
export { intlOperations } from './ducks';
export { default as intlReducers } from './ducks';

export { default as getUserLocale } from './getUserLocale';
export { default as setupIntl } from './setupIntl';

const messageDescriptorPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultMessage: PropTypes.string
});

export { messageDescriptorPropTypes };

export default {};
