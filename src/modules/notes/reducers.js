import { combineReducers } from 'redux';

import notesTypes from './types';

const noteReducer = (state, action) => {
  switch (action.type) {
    case notesTypes.ADD_NOTE:
      return action.payload;

    case notesTypes.EDIT_NOTE:
      if (state.id === action.payload.id) {
        return {
          ...state,
          title: action.payload.title,
          text: action.payload.text
        };
      }

      return state;

    case notesTypes.DELETE_LABEL:
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
    case notesTypes.ADD_NOTE:
    case notesTypes.EDIT_NOTE:
      return {
        ...state,
        [action.payload.id]: noteReducer(state[action.payload.id], action)
      };

    case notesTypes.DELETE_LABEL:
      return Object.values(state).reduce(
        (newState, note) => ({
          ...newState,
          [note.id]: noteReducer(note, action)
        }),
        {}
      );

    case notesTypes.DELETE_NOTE: {
      const { [action.payload.id]: deleteValue, ...newState } = state;

      return newState;
    }

    default:
      return state;
  }
};

const keys = (state = [], action) => {
  switch (action.type) {
    case notesTypes.ADD_NOTE:
      return [...state, action.payload.id];

    case notesTypes.DELETE_NOTE: {
      return state.filter(key => key !== action.payload.id);
    }

    default:
      return state;
  }
};

const notes = combineReducers({
  values,
  keys
});

export default notes;
