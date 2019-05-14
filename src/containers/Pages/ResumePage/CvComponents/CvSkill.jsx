import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import CvSkillTitle from './CvSkillTitle';
import CvSkillContent from './CvSkillContent';

import { CvSkillContainer } from './CvComponents.style';

const CvSkill = ({ icon, title, content }) => (
  <CvSkillContainer>
    <Grid container direction='row' alignItems='baseline' spacing={useMediaQuery(useTheme().breakpoints.up('lg')) ? 16 : 0}>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <CvSkillTitle icon={icon} title={title} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <CvSkillContent content={content} />
      </Grid>
    </Grid>
  </CvSkillContainer>
);

CvSkill.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  title: messageDescriptorPropTypes.isRequired,
  content: PropTypes.arrayOf(messageDescriptorPropTypes)
};

CvSkill.defaultProps = {
  content: []
};

export default CvSkill;
