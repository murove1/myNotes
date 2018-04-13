import { addToTrash } from '../actions';

export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_LABEL_FROM_NOTE = 'DELETE_LABEL_FROM_NOTE';

let noteNextId = 0;

export function addNote(noteParams) {
  return {
    type: ADD_NOTE,
    payload: {
      id: noteNextId++,
      ...noteParams
    }
  };
}

export function editNote(noteParams) {
  return {
    type: EDIT_NOTE,
    payload: {
      ...noteParams
    }
  };
}

export function deleteNote(id) {
  return (dispatch, getState) => {
    const state = getState();
    const noteToDelete = state.notes.find(note => note.id === id);

    dispatch({
      type: DELETE_NOTE,
      payload: {
        id
      }
    });

    dispatch(addToTrash(noteToDelete));
  };
}

export function deleteLabelForNote(title) {
  return {
    type: DELETE_LABEL_FROM_NOTE,
    payload: {
      title
    }
  };
}
