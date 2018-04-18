import { notesTypes } from './';

let noteNextId = 0;

const addNote = noteParams => ({
  type: notesTypes.ADD_NOTE,
  payload: {
    id: noteNextId++,
    ...noteParams
  }
});

const editNote = noteParams => ({
  type: notesTypes.EDIT_NOTE,
  payload: {
    ...noteParams
  }
});

const deleteNote = id => ({
  type: notesTypes.DELETE_NOTE,
  payload: {
    id
  }
});

const deleteLabelForNote = title => ({
  type: notesTypes.DELETE_LABEL_FROM_NOTE,
  payload: {
    title
  }
});

export default { addNote, editNote, deleteLabelForNote, deleteNote };
