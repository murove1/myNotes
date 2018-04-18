import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TrashPage from './TrashPage';
import { trashActions } from '../../modules/trash';

const mapStateToProps = state => ({ notes: state.trash });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(trashActions, dispatch)
)(TrashPage);
