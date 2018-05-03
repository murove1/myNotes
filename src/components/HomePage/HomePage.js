import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import Typography from 'material-ui/Typography';
import AddNoteForm from '../AddNoteForm';
import NotesList from '..//NotesList/NotesList';

const styles = {
  infoBlock: {
    margin: '100px auto',
    textAlign: 'center',
    color: '#BDBDBD'
  },
  infoIcon: {
    width: 120,
    height: 120
  }
};

const HomePage = ({ classes, notes, count, deleteNote }) => (
  <React.Fragment>
    <AddNoteForm />
    {count ? (
      <NotesList notes={notes} deleteNote={deleteNote} homeList />
    ) : (
      <div className={classes.infoBlock}>
        <LightbulbOutline className={classes.infoIcon} color="inherit" />
        <Typography variant="headline" color="inherit" gutterBottom>
          Your notes will be here.
        </Typography>
      </div>
    )}
  </React.Fragment>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  count: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default withStyles(styles)(HomePage);
