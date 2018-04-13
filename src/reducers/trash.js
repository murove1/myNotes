import { ADD_TO_TRASH, DELETE_FROM_TRASH } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_TRASH: {
      return [action.payload, ...state];
    }

    case DELETE_FROM_TRASH: {
      const index = state.findIndex(note => note.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
}
