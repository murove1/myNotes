import { combineReducers } from 'redux';

import notes from './notes';
import labels from './labels';
import trash from './trash';

export default combineReducers({
  notes,
  labels,
  trash
});
