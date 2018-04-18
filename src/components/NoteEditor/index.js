import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoteEditor from './NoteEditor';
import { notesActions } from '../../modules/notes';

export default connect(null, dispatch =>
  bindActionCreators(notesActions, dispatch)
)(NoteEditor);
