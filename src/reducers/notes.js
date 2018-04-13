import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  DELETE_LABEL_FROM_NOTE
} from '../actions';

function noteReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_NOTE: {
      if (state.id === action.payload.id) {
        return {
          ...state,
          title: action.payload.title,
          text: action.payload.text
        };
      }

      return state;
    }

    case DELETE_LABEL_FROM_NOTE:
      return {
        ...state,
        labels: state.labels.filter(label => label !== action.payload.title)
      };

    default:
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_NOTE: {
      return [action.payload, ...state];
    }

    case EDIT_NOTE:
      return state.map(note => noteReducer(note, action));

    case DELETE_NOTE: {
      const index = state.findIndex(note => note.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    case DELETE_LABEL_FROM_NOTE:
      return state.map(note => noteReducer(note, action));

    default:
      return state;
  }
}
