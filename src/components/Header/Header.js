import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import styles from './styles';

const Header = ({ classes }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Link to="/">
        <LightbulbOutline className={classes.logoIcon} />
      </Link>
      <Typography variant="title" color="inherit" className={classes.flex}>
        MyNotes
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
