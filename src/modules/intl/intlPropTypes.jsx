import PropTypes from 'prop-types';

const messageDescriptorPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultMessage: PropTypes.string
});

export { messageDescriptorPropTypes };
export default {};
