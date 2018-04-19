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

const styles = {
  listInfoText: {
    textAlign: 'center'
  },
  actionButton: {
    width: 34,
    height: 34
  }
};

class LabelsEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, labels, editLabel, deleteLabel } = this.props;

    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
          <EditIcon />
        </IconButton>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Edit labels</DialogTitle>
          <DialogContent>
            <List>
              {labels.length ? (
                labels.map(label => (
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
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

LabelsEditor.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  editLabel: PropTypes.func.isRequired,
  deleteLabel: PropTypes.func.isRequired
};

export default withStyles(styles)(LabelsEditor);
