import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TrashPage from './TrashPage';
import { deleteFromTrash } from '../../actions';

const mapStateToProps = state => ({ notes: state.trash });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ deleteFromTrash }, dispatch)
)(TrashPage);
