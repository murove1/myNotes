import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Masonry from 'react-masonry-component';
import NoteCard from '../NoteCard/NoteCard';
import styles from './styles';

const masonryOptions = { gutter: 20, isFitWidth: true };

const NotesList = props => {
  const {
    classes,
    notes,
    homeList,
    trashList,
    labelList,
    deleteFromTrash,
    deleteNote
  } = props;

  return (
    <div className={classes.containerGrid}>
      <Masonry options={masonryOptions} className={classes.grid}>
        {Object.values(notes).map(note => (
          <NoteCard
            key={note.id}
            {...note}
            homeList={homeList}
            trashList={trashList}
            labelList={labelList}
            deleteFromTrash={deleteFromTrash}
            deleteNote={deleteNote}
          />
        ))}
      </Masonry>
    </div>
  );
};

NotesList.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  homeList: PropTypes.bool,
  trashList: PropTypes.bool,
  labelList: PropTypes.bool,
  deleteFromTrash: PropTypes.func,
  deleteNote: PropTypes.func
};

NotesList.defaultProps = {
  homeList: false,
  trashList: false,
  labelList: false,
  deleteFromTrash: null,
  deleteNote: null
};

export default withStyles(styles)(NotesList);
