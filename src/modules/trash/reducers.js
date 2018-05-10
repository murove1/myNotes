import { combineReducers } from 'redux';
import trashTypes from './types';

const noteReducer = (state, action) => {
  switch (action.type) {
    case trashTypes.ADD_TO_TRASH:
      return action.payload;

    case trashTypes.DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter(label => label !== action.payload.title)
      };

    default:
      return state;
  }
};

const values = (state = {}, action) => {
  switch (action.type) {
    case trashTypes.ADD_TO_TRASH:
      return {
        ...state,
        [action.payload.id]: noteReducer(state[action.payload.id], action)
      };

    case trashTypes.DELETE_LABEL:
      return Object.values(state).reduce(
        (newState, note) => ({
          ...newState,
          [note.id]: noteReducer(note, action)
        }),
        {}
      );

    case trashTypes.DELETE_FROM_TRASH: {
      const { [action.payload.id]: deleteValue, ...newState } = state;

      return newState;
    }

    default:
      return state;
  }
};

const keys = (state = [], action) => {
  switch (action.type) {
    case trashTypes.ADD_TO_TRASH:
      return [...state, action.payload.id];

    case trashTypes.DELETE_FROM_TRASH: {
      return state.filter(key => key !== action.payload.id);
    }

    default:
      return state;
  }
};

const trash = combineReducers({
  values,
  keys
});

export default trash;
