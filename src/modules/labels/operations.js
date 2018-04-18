import { labelsActions } from './';
import { notesActions } from '../notes';

const deleteLabel = id => (dispatch, getState) => {
  const state = getState();
  const labelToDelete = state.labels.find(label => label.id === id);

  dispatch(labelsActions.deleteLabel(id));
  dispatch(notesActions.deleteLabelForNote(labelToDelete.title));
};

export default { deleteLabel };
