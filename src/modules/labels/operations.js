import { labelsActions } from './';
import { notesActions } from '../notes';
import { trashActions } from '../trash';

const deleteLabel = id => (dispatch, getState) => {
  const state = getState();
  const labelToDelete = state.labels.values[id];

  dispatch(labelsActions.deleteLabel(id));
  dispatch(notesActions.deleteLabelForNote(labelToDelete.title));
  dispatch(trashActions.deleteLabelForTrash(labelToDelete.title));
};

export default { deleteLabel };
