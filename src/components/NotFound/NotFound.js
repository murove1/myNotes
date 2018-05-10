import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ThumbDown from 'material-ui-icons/ThumbDown';
import styles from './styles';

const NotFound = ({ classes, location }) => (
  <div className={classes.infoBlock}>
    <ThumbDown className={classes.infoIcon} color="inherit" />
    <Typography variant="headline" color="inherit" gutterBottom>
      Sorry, page <strong>{location.pathname}</strong> was not found!
    </Typography>
  </div>
);

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NotFound));
