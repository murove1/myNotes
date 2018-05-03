import { combineReducers } from 'redux';
import labelsTypes from './types';

const labelReducer = (state, action) => {
  switch (action.type) {
    case labelsTypes.ADD_LABEL:
      return action.payload;

    case labelsTypes.EDIT_LABEL:
      if (state.id === action.payload.id) {
        return { ...state, title: action.payload.title };
      }

      return state;

    default:
      return state;
  }
};

const values = (state = {}, action) => {
  switch (action.type) {
    case labelsTypes.ADD_LABEL:
    case labelsTypes.EDIT_LABEL:
      return {
        ...state,
        [action.payload.id]: labelReducer(state[action.payload.id], action)
      };

    case labelsTypes.DELETE_LABEL: {
      const { [action.payload.id]: deleteValue, ...newState } = state;

      return newState;
    }

    default:
      return state;
  }
};

const keys = (state = [], action) => {
  switch (action.type) {
    case labelsTypes.ADD_LABEL:
      return [...state, action.payload.id];

    case labelsTypes.DELETE_LABEL: {
      return state.filter(key => key !== action.payload.id);
    }

    default:
      return state;
  }
};

const labels = combineReducers({
  values,
  keys
});

export default labels;
