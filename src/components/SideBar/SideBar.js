import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import NotesIcon from 'material-ui-icons/Receipt';
import TrashIcon from 'material-ui-icons/Delete';
import LabelsList from '../LabelsList';
import styles from './styles';

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
