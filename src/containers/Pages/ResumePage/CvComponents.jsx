import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RightHarpoonUp } from 'Components/Fonts';

import { messageDescriptorPropTypes } from 'Modules/intl/intlPropTypes';

import { CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer, CvSkillsContainer, CvSkillsTitleContainer, CvSkillsContentContainer } from './ResumePage.style';

const dateFormats = {
  short: {
    year: 'numeric'
  },
  long: {
    year: 'numeric',
    month: 'long'
  }
};

const CvSection = ({ icon, title, children }) => (
  <Grid container direction='column' alignItems='center'>
    <Grid item>
      <FontAwesomeIcon icon={icon} />
    </Grid>

    <Grid item>
      <Typography variant='h4'>
        <FormattedMessage {...title} />
      </Typography>
    </Grid>

    <Grid item>{children}</Grid>
  </Grid>
);

CvSection.propTypes = {
  icon: PropTypes.string.isRequired,
  title: messageDescriptorPropTypes.isRequired,
  children: PropTypes.node
};

CvSection.defaultProps = {
  children: null
};

const CvEntryDate = ({ from, to, format }) => (
  <CvEntryDateContainer>
    <Typography variant='subtitle1'>
      {from && typeof from === 'string' ? <FormattedDate value={new Date(from)} {...dateFormats[format]} /> : null}
      {from && typeof from === 'object' ? <FormattedMessage {...from} /> : null}
      {from ? <RightHarpoonUp /> : null}
      {format === 'long' ? <br /> : null}
      {to && typeof to === 'string' ? <FormattedDate value={new Date(to)} {...dateFormats[format]} /> : null}
      {to && typeof to === 'object' ? <FormattedMessage {...to} /> : null}
    </Typography>
  </CvEntryDateContainer>
);

CvEntryDate.propTypes = {
  from: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  to: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  format: PropTypes.string
};

CvEntryDate.defaultProps = {
  from: '',
  to: '',
  format: 'short'
};

const CvEntryContent = ({ title, content }) => (
  <CvEntryContentContainer>
    <Grid container direction='column' spacing={0}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant='subtitle2'>
          <FormattedMessage {...title} />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant='body2'>
          <FormattedMessage {...content} />
        </Typography>
      </Grid>
    </Grid>
  </CvEntryContentContainer>
);

CvEntryContent.propTypes = {
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired
};

const CvEntry = ({ from, to, dateFormat, title, content }) => (
  <CvEntryContainer>
    <Grid container direction='row' alignItems='baseline' spacing={16}>
      <Grid item xs={12} sm={3} md={3} lg={2} xl={2}>
        <CvEntryDate from={from} to={to} format={dateFormat} />
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={10} xl={10}>
        <CvEntryContent title={title} content={content} />
      </Grid>
    </Grid>
  </CvEntryContainer>
);

CvEntry.propTypes = {
  from: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  to: PropTypes.oneOfType([PropTypes.string, messageDescriptorPropTypes]),
  dateFormat: PropTypes.string,
  title: messageDescriptorPropTypes.isRequired,
  content: messageDescriptorPropTypes.isRequired
};

CvEntry.defaultProps = {
  from: '',
  to: '',
  dateFormat: 'short'
};

const CvSkillsTitle = ({ icon, title }) => (
  <CvSkillsTitleContainer>
    <Typography variant='subtitle1'>
      <FontAwesomeIcon icon={icon} />
      <FormattedMessage {...title} />
    </Typography>
  </CvSkillsTitleContainer>
);

const CvSkillsContent = ({ content }) => (
  <CvSkillsContentContainer>
    <Grid container direction='row' alignItems='baseline' spacing={0}>
      {content.map((line) => (
        <Grid item key={line.id} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='body2'>
            <FormattedMessage {...line} />
          </Typography>
        </Grid>
      ))}
    </Grid>
  </CvSkillsContentContainer>
);

const CvSkills = ({ icon, title, content }) => (
  <CvSkillsContainer>
    <Grid container direction='row' alignItems='baseline' spacing={16}>
      <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
        <CvSkillsTitle icon={icon} title={title} />
      </Grid>
      <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
        <CvSkillsContent content={content} />
      </Grid>
    </Grid>
  </CvSkillsContainer>
);

export { CvEntry, CvSkills };
export default CvSection;
