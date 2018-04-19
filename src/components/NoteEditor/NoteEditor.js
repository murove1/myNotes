import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';

const styles = {
  actionButton: {
    width: 34,
    height: 34
  }
};

class NoteEditor extends Component {
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

  handleSubmit = () => {
    const { editNote, id, title, text } = this.props;

    if (text) {
      editNote({ id, title, text });
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, title, text, onChange } = this.props;

    return (
      <div>
        <IconButton
          className={classes.actionButton}
          onClick={this.handleClickOpen}>
          <EditIcon />
        </IconButton>
        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth>
          <DialogTitle>Edit note</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={onChange('title')}
            />
            <TextField
              margin="dense"
              label="Text"
              type="text"
              fullWidth
              multiline
              rows="3"
              rowsMax="4"
              value={text}
              onChange={onChange('text')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

NoteEditor.defaultProps = {
  title: 'Title'
};

export default withStyles(styles)(NoteEditor);
