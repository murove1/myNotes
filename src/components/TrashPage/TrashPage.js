import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TrashIcon from 'material-ui-icons/Delete';
import Typography from 'material-ui/Typography';
import NotesList from '../NotesList/NotesList';

const styles = {
  infoBlock: {
    width: 500,
    margin: '40vh auto',
    textAlign: 'center',
    color: '#BDBDBD'
  },
  infoIcon: {
    width: 120,
    height: 120
  }
};

const TrashPage = ({ classes, notes, deleteFromTrash }) => (
  <div>
    {notes.length ? (
      <NotesList notes={notes} deleteFromTrash={deleteFromTrash} trashList />
    ) : (
      <div className={classes.infoBlock}>
        <TrashIcon className={classes.infoIcon} color="inherit" />
        <Typography variant="headline" color="inherit" gutterBottom>
          There is nothing in the trash.
        </Typography>
      </div>
    )}
  </div>
);

TrashPage.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  deleteFromTrash: PropTypes.func.isRequired
};

export default withStyles(styles)(TrashPage);
