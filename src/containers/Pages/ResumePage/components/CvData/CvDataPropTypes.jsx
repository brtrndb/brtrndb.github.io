import PropTypes from 'prop-types';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

const linesPropTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.shape({
      dateFormat: PropTypes.oneOf(['short', 'long']),
      from: PropTypes.string,
      to: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]).isRequired,
      title: messageDescriptorPropTypes.isRequired,
      content: messageDescriptorPropTypes.isRequired,
      image: PropTypes.string
    }),
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.string.isRequired)]),
      title: messageDescriptorPropTypes.isRequired,
      content: PropTypes.arrayOf(messageDescriptorPropTypes).isRequired
    })
  ])
);

const stylesPropTypes = PropTypes.shape({
  section: PropTypes.shape({
    direction: PropTypes.string.isRequired,
    justify: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired,
    breakpoints: PropTypes.shape({
      xs: PropTypes.number.isRequired,
      sm: PropTypes.number.isRequired,
      md: PropTypes.number.isRequired,
      lg: PropTypes.number.isRequired,
      xl: PropTypes.number.isRequired
    }).isRequired
  }),
  entry: PropTypes.shape({
    breakpoints: PropTypes.shape({
      xs: PropTypes.number.isRequired,
      sm: PropTypes.number.isRequired,
      md: PropTypes.number.isRequired,
      lg: PropTypes.number.isRequired,
      xl: PropTypes.number.isRequired
    }).isRequired
  })
});

export { linesPropTypes, stylesPropTypes };
export default {};
