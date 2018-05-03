import { notesActions } from './';
import { trashActions } from '../trash';

const deleteNote = id => (dispatch, getState) => {
  const state = getState();
  const noteToDelete = state.notes.values[id];

  dispatch(notesActions.deleteNote(id));
  dispatch(trashActions.addToTrash(noteToDelete));
};

export default { deleteNote };
