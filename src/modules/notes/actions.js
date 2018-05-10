import { v4 as generateId } from 'node-uuid';
import { notesTypes } from './';

const addNote = noteParams => ({
  type: notesTypes.ADD_NOTE,
  payload: {
    id: generateId(),
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
  type: notesTypes.DELETE_LABEL,
  payload: {
    title
  }
});

export default { addNote, editNote, deleteLabelForNote, deleteNote };
