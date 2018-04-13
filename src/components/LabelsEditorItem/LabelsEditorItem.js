import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import LabelIcon from 'material-ui-icons/Label';
import TrashIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import SaveIcon from 'material-ui-icons/Save';

const styles = {
  listItem: {
    padding: '0 0 16px 0'
  },
  listItemContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  },
  listItemActions: {
    display: 'flex',
    marginLeft: 30
  }
};

class LabelsEditorItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;

    onDelete(id);
  };

  handleSubmit = () => {
    const { id, onEdit } = this.props;
    const title = this.editInput.value;

    if (title) {
      onEdit({ id, title });
    }

    this.setState({ editing: false });
  };

  render() {
    const { classes, title } = this.props;

    return (
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        {this.state.editing ? (
          <div>
            <Input
              defaultValue={title}
              inputRef={input => {
                this.editInput = input;
              }}
            />
            <IconButton onClick={this.handleSubmit}>
              <SaveIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.listItemContainer}>
            <ListItemText primary={title} />
            <div className={classes.listItemActions}>
              <IconButton onClick={this.handleEdit}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={this.handleDelete}>
                <TrashIcon />
              </IconButton>
            </div>
          </div>
        )}
      </ListItem>
    );
  }
}

LabelsEditorItem.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(LabelsEditorItem);
