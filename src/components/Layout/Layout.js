import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Routes from '../Routes/Routes';

const styles = {
  main: {
    marginTop: 64,
    paddingLeft: 280
  }
};

const Layout = ({ classes }) => (
  <div>
    <Header />
    <SideBar />
    <main className={classes.main}>
      <Routes />
    </main>
  </div>
);

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
