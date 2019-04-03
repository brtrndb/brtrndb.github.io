import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import CvEntry from './CvEntry';
import CvSkill from './CvSkill';

import { CvSectionContainer } from './CvComponents.style';

const toCvEntry = (entry) => (
  <Grid item key={entry.title.id}>
    <CvEntry {...entry} />
  </Grid>
);

const toCvSkill = (breakpoints) => (skill) => (
  <Grid item key={skill.title.id} {...breakpoints}>
    <CvSkill {...skill} />
  </Grid>
);

const CvSection = ({ styles, icon, title, entries, skills }) => (
  <CvSectionContainer>
    <Grid container direction='column' spacing={useMediaQuery(useTheme().breakpoints.up('sm')) ? 16 : 0}>
      <Grid item>
        <Typography variant='h4' align='center'>
          <FontAwesomeIcon icon={icon} />
          <FormattedMessage {...title} />
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction={styles.direction} justify={styles.justify || 'center'} spacing={16}>
          {entries ? entries.map(toCvEntry) : null}
          {skills ? skills.map(toCvSkill(styles.bpEntry)) : null}
        </Grid>
      </Grid>
    </Grid>
  </CvSectionContainer>
);

CvSection.propTypes = {
  icon: PropTypes.string.isRequired,
  title: messageDescriptorPropTypes.isRequired
};

CvSection.defaultProps = {};

export default CvSection;
