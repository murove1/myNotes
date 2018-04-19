import { withInputs } from 'custom-hoc';

import LabelsEditorItem from './LabelsEditorItem';

export default withInputs(({ title }) => ({
  title: {
    defaultValue: title
  }
}))(LabelsEditorItem);
