import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvSkillContainer, CvSkillTitleContainer, CvSkillContentContainer } from './CvComponents.style';

const CvSkillTitle = ({ icon, title }) => (
  <CvSkillTitleContainer>
    <Typography variant='subtitle1'>
      <FontAwesomeIcon icon={icon} />
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
    <Grid container direction='row'>
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
    <Grid container direction='row'>
      <Grid item>
        <CvSkillTitle icon={icon} title={title} />
      </Grid>
      <Grid item>
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
