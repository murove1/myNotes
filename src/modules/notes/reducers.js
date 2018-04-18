import { notesTypes } from './';

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case notesTypes.EDIT_NOTE: {
      if (state.id === action.payload.id) {
        return {
          ...state,
          title: action.payload.title,
          text: action.payload.text
        };
      }

      return state;
    }

    case notesTypes.DELETE_LABEL_FROM_NOTE:
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
    case notesTypes.ADD_NOTE: {
      return [action.payload, ...state];
    }

    case notesTypes.EDIT_NOTE:
      return state.map(note => noteReducer(note, action));

    case notesTypes.DELETE_NOTE: {
      const index = state.findIndex(note => note.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    case notesTypes.DELETE_LABEL_FROM_NOTE:
      return state.map(note => noteReducer(note, action));

    default:
      return state;
  }
};
