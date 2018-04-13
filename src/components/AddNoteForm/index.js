import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddNoteForm from './AddNoteForm';
import { addNote } from '../../actions';

const mapStateToProps = state => ({ labels: state.labels });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ addNote }, dispatch)
)(AddNoteForm);
