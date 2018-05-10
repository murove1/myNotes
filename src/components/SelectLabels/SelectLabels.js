import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import { ListItemText } from 'material-ui/List';
import styles from './styles';

const SelectLabels = props => {
  const { classes, labels, count, values, onLabelCheck } = props;
  const handleCheck = label => () => onLabelCheck(label.title);

  return (
    <FormControl className={classes.formControl}>
      <Select
        multiple
        value={values}
        renderValue={selected => selected.join(', ')}>
        {count ? (
          Object.values(labels).map(label => (
            <MenuItem key={label.id}>
              <Checkbox
                color="primary"
                checked={values.includes(label.title)}
                onChange={handleCheck(label)}
              />
              <ListItemText primary={label.title} />
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>
            <ListItemText
              className={classes.listItemText}
              primary="Label list empty"
            />
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

SelectLabels.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  count: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLabelCheck: PropTypes.func.isRequired
};

export default withStyles(styles)(SelectLabels);
