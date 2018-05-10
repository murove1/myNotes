import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import List from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import LabelsEditorItem from '../LabelsEditorItem';
import styles from './styles';

class LabelsEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, labels, count, editLabel, deleteLabel } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <IconButton onClick={this.handleToggleOpen}>
          <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={this.handleToggleOpen}>
          <DialogTitle>Edit labels</DialogTitle>
          <DialogContent>
            <List>
              {count ? (
                Object.values(labels).map(label => (
                  <LabelsEditorItem
                    key={label.id}
                    id={label.id}
                    title={label.title}
                    onEdit={editLabel}
                    onDelete={deleteLabel}
                  />
                ))
              ) : (
                <div className={classes.listInfoText}>Label list empty.</div>
              )}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggleOpen} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

LabelsEditor.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  count: PropTypes.number.isRequired,
  editLabel: PropTypes.func.isRequired,
  deleteLabel: PropTypes.func.isRequired
};

export default withStyles(styles)(LabelsEditor);
