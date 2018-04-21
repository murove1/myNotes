import { trashTypes } from './';

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case trashTypes.DELETE_LABEL_FROM_TRASH:
      return {
        ...state,
        labels: state.labels.filter(label => label !== action.payload.title)
      };

    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case trashTypes.ADD_TO_TRASH: {
      return [action.payload, ...state];
    }

    case trashTypes.DELETE_FROM_TRASH: {
      const index = state.findIndex(note => note.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    case trashTypes.DELETE_LABEL_FROM_TRASH:
      return state.map(note => noteReducer(note, action));

    default:
      return state;
  }
};
