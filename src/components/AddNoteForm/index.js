import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddNoteForm from './AddNoteForm';
import { notesActions } from '../../modules/notes';

const mapStateToProps = state => ({
  labels: state.labels.values,
  labelCount: state.labels.keys.length
});

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(notesActions, dispatch)
)(AddNoteForm);
