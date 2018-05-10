import { trashTypes } from './';

const addToTrash = note => ({
  type: trashTypes.ADD_TO_TRASH,
  payload: {
    ...note
  }
});

const deleteFromTrash = id => ({
  type: trashTypes.DELETE_FROM_TRASH,
  payload: {
    id
  }
});

const deleteLabelForTrash = title => ({
  type: trashTypes.DELETE_LABEL,
  payload: {
    title
  }
});

export default { addToTrash, deleteFromTrash, deleteLabelForTrash };
