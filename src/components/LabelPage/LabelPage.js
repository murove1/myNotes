import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import LabelIcon from 'material-ui-icons/Label';
import NotesList from '../NotesList/NotesList';
import styles from './styles';

const LabelPage = ({ classes, notes, deleteNote }) => (
  <React.Fragment>
    {notes.length ? (
      <NotesList notes={notes} deleteNote={deleteNote} labelList />
    ) : (
      <div className={classes.infoBlock}>
        <LabelIcon className={classes.infoIcon} color="inherit" />
        <Typography variant="headline" color="inherit" gutterBottom>
          No notes with this label.
        </Typography>
      </div>
    )}
  </React.Fragment>
);

LabelPage.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default withStyles(styles)(LabelPage);
