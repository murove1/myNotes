import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelsEditor from './LabelsEditor';
import { labelsActions, labelsOperations } from '../../modules/labels';

const labelsActionsAndOperations = { ...labelsActions, ...labelsOperations };

const mapStateToProps = state => ({ labels: state.labels });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(labelsActionsAndOperations, dispatch)
)(LabelsEditor);
