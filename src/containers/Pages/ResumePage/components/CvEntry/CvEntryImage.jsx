import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { styles, CvEntryImageContainer } from './CvEntry.style';

const CvEntryImage = withStyles(styles)(({ image, classes }) => (
  <CvEntryImageContainer>
    <Img src={image} loader={<CircularProgress />} className={classes.cvImage} />
  </CvEntryImageContainer>
));

CvEntryImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default CvEntryImage;
