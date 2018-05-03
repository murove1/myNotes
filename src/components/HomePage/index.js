import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import { notesOperations } from '../../modules/notes';

const mapStateToProps = state => ({
  notes: state.notes.values,
  count: state.notes.keys.length
});

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(notesOperations, dispatch)
)(HomePage);
