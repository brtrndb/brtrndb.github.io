import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NonBreakableSpace } from 'Components/Fonts';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvSkillTitleContainer } from './CvComponents.style';

const CvSkillTitle = ({ icon, title }) => (
  <CvSkillTitleContainer>
    <Typography variant='subtitle1' align={useMediaQuery(useTheme().breakpoints.up('lg')) ? 'right' : 'center'}>
      <FontAwesomeIcon icon={icon} />
      <NonBreakableSpace />
      <FormattedMessage {...title} />
    </Typography>
  </CvSkillTitleContainer>
);

CvSkillTitle.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  title: messageDescriptorPropTypes.isRequired
};

export default CvSkillTitle;
