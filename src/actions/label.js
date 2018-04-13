import { deleteLabelForNote } from '../actions';

export const ADD_LABEL = 'ADD_LABEL';
export const EDIT_LABEL = 'EDIT_LABEL';
export const DELETE_LABEL = 'DELETE_LABEL';

let labelNextId = 0;

export function addLabel(title) {
  return {
    type: ADD_LABEL,
    payload: {
      id: labelNextId++,
      title
    }
  };
}

export function editLabel(labelParams) {
  return {
    type: EDIT_LABEL,
    payload: {
      ...labelParams
    }
  };
}

export function deleteLabel(id) {
  return (dispatch, getState) => {
    const state = getState();
    const labelToDelete = state.labels.find(label => label.id === id);

    dispatch({
      type: DELETE_LABEL,
      payload: {
        id
      }
    });

    dispatch(deleteLabelForNote(labelToDelete.title));
  };
}
