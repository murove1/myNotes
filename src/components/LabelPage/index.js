import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import LabelPage from './LabelPage';
import { notesOperations } from '../../modules/notes';

const mapStateToProps = (state, ownProps) => ({
  notes: state.notes.filter(note =>
    note.labels.includes(ownProps.match.params.title)
  )
});

export default withRouter(
  connect(mapStateToProps, dispatch =>
    bindActionCreators(notesOperations, dispatch)
  )(LabelPage)
);
