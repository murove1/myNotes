import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddLabelForm from './AddLabelForm';
import { addLabel } from '../../actions';

const mapStateToProps = state => ({ labels: state.labels });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ addLabel }, dispatch)
)(AddLabelForm);
