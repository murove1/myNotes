import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import { deleteNote } from '../../actions';

const mapStateToProps = state => ({ notes: state.notes });

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ deleteNote }, dispatch)
)(HomePage);
