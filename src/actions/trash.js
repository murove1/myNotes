export const ADD_TO_TRASH = 'ADD_TO_TRASH';
export const DELETE_FROM_TRASH = 'DELETE_FROM_TRASH';

export function addToTrash(note) {
  return {
    type: ADD_TO_TRASH,
    payload: {
      ...note
    }
  };
}

export function deleteFromTrash(id) {
  return {
    type: DELETE_FROM_TRASH,
    payload: {
      id
    }
  };
}
