import { ADD_LABEL, EDIT_LABEL, DELETE_LABEL } from '../actions';

function labelReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_LABEL:
      if (state.id === action.payload.id) {
        return { ...state, title: action.payload.title };
      }

      return state;

    default:
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_LABEL: {
      return [action.payload, ...state];
    }

    case EDIT_LABEL:
      return state.map(label => labelReducer(label, action));

    case DELETE_LABEL: {
      const index = state.findIndex(label => label.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
}
