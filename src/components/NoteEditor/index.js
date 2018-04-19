import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withInputs } from 'custom-hoc';

import NoteEditor from './NoteEditor';
import { notesActions } from '../../modules/notes';

export default compose(
  connect(null, dispatch => bindActionCreators(notesActions, dispatch)),

  withInputs(({ title, text }) => ({
    title: {
      defaultValue: title
    },
    text: {
      defaultValue: text
    }
  }))
)(NoteEditor);
