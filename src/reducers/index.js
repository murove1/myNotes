import { combineReducers } from 'redux';

import notes from './notes';
import labels from './labels';
import trash from './trash';

const reducer = combineReducers({
  notes,
  labels,
  trash
});

export default reducer;
