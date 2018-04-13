import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AddIcon from 'material-ui-icons/Add';

const defaultState = { open: false, value: '' };

class AddLabelForm extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, value: '' });
  };

  handleInputOnChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    const { addLabel, labels } = this.props;
    const { value } = this.state;
    const existingLabel = labels.find(label => label.title === value);

    if (!existingLabel) {
      addLabel(value);
    }

    this.setState(defaultState);
  };

  render() {
    const { open, value } = this.state;

    return (
      <div>
        <ListItem button onClick={this.handleClickOpen}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add new label" />
        </ListItem>
        <Dialog open={open} onClose={this.handleClose} fullWidth>
          <DialogTitle>Add Label</DialogTitle>
          <DialogContent>
            <TextField
              value={value}
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              onChange={this.handleInputOnChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              disabled={!value}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddLabelForm.propTypes = {
  addLabel: PropTypes.func.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AddLabelForm;
