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

const toCvLine = (Component) => (styles) => (skill) => (
  <Grid item key={skill.title.id} {...styles.breakpoints}>
    <Component {...skill} />
  </Grid>
);

const mapLinesTo = {
  entries: toCvLine(CvEntry),
  skills: toCvLine(CvSkill)
};

const CvLines = ({ type, lines, styles }) => lines.map(mapLinesTo[type](styles));

const CvSection = ({ type, icon, title, lines, styles }) => (
  <CvSectionContainer>
    <Grid container direction='column' spacing={useMediaQuery(useTheme().breakpoints.up('sm')) ? 16 : 8}>
      <Grid item>
        <Typography variant='h4' align='center'>
          <FontAwesomeIcon icon={icon} />
          <FormattedMessage {...title} />
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction={styles.section.direction} justify={styles.section.justify} alignItems={styles.section.alignItems} spacing={useMediaQuery(useTheme().breakpoints.up('md')) ? 16 : 0}>
          <CvLines type={type} lines={lines} styles={styles.entry} />
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
