import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText
} from 'material-ui/List';
import LabelIcon from 'material-ui-icons/Label';
import LabelsEditor from '../LabelsEditor';
import AddLabelForm from '../AddLabelForm';

const styles = {
  subHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 0
  },
  listItem: {
    wordWrap: 'break-word'
  }
};

const LabelsList = ({ classes, labels }) => (
  <React.Fragment>
    <ListSubheader className={classes.subHeader} disableSticky>
      Labels
      <LabelsEditor />
    </ListSubheader>
    <List>
      {Object.values(labels).map(label => (
        <ListItem
          key={label.id}
          id={label.id}
          className={classes.listItem}
          component={Link}
          to={`/label/${label.title}`}
          button>
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText primary={label.title} />
        </ListItem>
      ))}
      <AddLabelForm />
    </List>
  </React.Fragment>
);

LabelsList.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default withStyles(styles)(LabelsList);
