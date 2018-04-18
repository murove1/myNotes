import { labelsTypes } from './';

const labelReducer = (state = {}, action) => {
  switch (action.type) {
    case labelsTypes.EDIT_LABEL:
      if (state.id === action.payload.id) {
        return { ...state, title: action.payload.title };
      }

      return state;

    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case labelsTypes.ADD_LABEL: {
      return [action.payload, ...state];
    }

    case labelsTypes.EDIT_LABEL:
      return state.map(label => labelReducer(label, action));

    case labelsTypes.DELETE_LABEL: {
      const index = state.findIndex(label => label.id === action.payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
