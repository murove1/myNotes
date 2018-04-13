import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoteEditor from './NoteEditor';
import { editNote } from '../../actions';

export default connect(null, dispatch =>
  bindActionCreators({ editNote }, dispatch)
)(NoteEditor);
