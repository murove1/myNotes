import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelsEditor from './LabelsEditor';
import { editLabel, deleteLabel } from '../../actions';

const mapStateToProps = state => ({ labels: state.labels });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ editLabel, deleteLabel }, dispatch)
)(LabelsEditor);
