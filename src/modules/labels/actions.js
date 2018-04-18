import { labelsTypes } from './';

let labelNextId = 0;

const addLabel = title => ({
  type: labelsTypes.ADD_LABEL,
  payload: {
    id: labelNextId++,
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
