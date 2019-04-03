import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NonBreakableSpace } from 'Components/Fonts';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvSkillContainer, CvSkillTitleContainer, CvSkillContentContainer } from './CvComponents.style';

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

const CvSkillContent = ({ content }) => (
  <CvSkillContentContainer>
    <Grid container direction='column'>
      {content.map((line) => (
        <Grid item key={line.id}>
          <Typography variant='body2'>
            <FormattedMessage {...line} />
          </Typography>
        </Grid>
      ))}
    </Grid>
  </CvSkillContentContainer>
);

CvSkillContent.propTypes = {
  content: PropTypes.arrayOf(messageDescriptorPropTypes).isRequired
};

const CvSkill = ({ icon, title, content }) => (
  <CvSkillContainer>
    <Grid container direction='row' alignItems='baseline' spacing={useMediaQuery(useTheme().breakpoints.up('lg')) ? 16 : 0}>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
        <CvSkillTitle icon={icon} title={title} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
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
