import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import NotesIcon from 'material-ui-icons/Receipt';
import TrashIcon from 'material-ui-icons/Delete';
import LabelsList from '../LabelsList';

const styles = {
  sideNav: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    zIndex: 1000,
    width: 280,
    paddingTop: 64,
    backgroundColor: '#fff',
    overflowY: 'auto'
  }
};

const SideBar = ({ classes }) => (
  <div className={classes.sideNav}>
    <List>
      <ListItem component={Link} to="/" button>
        <ListItemIcon>
          <NotesIcon />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
      <Divider />
      <LabelsList />
      <Divider />
      <ListItem component={Link} to="/trash" button>
        <ListItemIcon>
          <TrashIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  </div>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
