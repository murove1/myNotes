import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddLabelForm from './AddLabelForm';
import { labelsActions } from '../../modules/labels';

const mapStateToProps = state => ({ labels: state.labels });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(labelsActions, dispatch)
)(AddLabelForm);
