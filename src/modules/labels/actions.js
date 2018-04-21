import { v4 as generateId } from 'node-uuid';
import { labelsTypes } from './';

const addLabel = title => ({
  type: labelsTypes.ADD_LABEL,
  payload: {
    id: generateId(),
    title
  }
});

const editLabel = labelParams => ({
  type: labelsTypes.EDIT_LABEL,
  payload: {
    ...labelParams
  }
});

const deleteLabel = id => ({
  type: labelsTypes.DELETE_LABEL,
  payload: {
    id
  }
});

export default { addLabel, editLabel, deleteLabel };
