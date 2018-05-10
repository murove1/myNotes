import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TrashIcon from 'material-ui-icons/Delete';
import Typography from 'material-ui/Typography';
import NotesList from '../NotesList/NotesList';
import styles from './styles';

const TrashPage = ({ classes, notes, count, deleteFromTrash }) => (
  <React.Fragment>
    {count ? (
      <NotesList notes={notes} deleteFromTrash={deleteFromTrash} trashList />
    ) : (
      <div className={classes.infoBlock}>
        <TrashIcon className={classes.infoIcon} color="inherit" />
        <Typography variant="headline" color="inherit" gutterBottom>
          There is nothing in the trash.
        </Typography>
      </div>
    )}
  </React.Fragment>
);

TrashPage.propTypes = {
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
  deleteFromTrash: PropTypes.func.isRequired
};

export default withStyles(styles)(TrashPage);
