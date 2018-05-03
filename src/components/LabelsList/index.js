import { connect } from 'react-redux';

import LabelsList from './LabelsList';

const mapStateToProps = state => ({ labels: state.labels.values });

export default connect(mapStateToProps)(LabelsList);
