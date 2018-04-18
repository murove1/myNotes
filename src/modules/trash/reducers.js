import { trashTypes } from './';

export default (state = [], action) => {
  switch (action.type) {
    case trashTypes.ADD_TO_TRASH: {
      return [action.payload, ...state];
    }

    case trashTypes.DELETE_FROM_TRASH: {
      const index = state.findIndex(note => note.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
