import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import styles from './styles';

const COLORS = ['#FFF', '#FECB00', '#11CD86', '#E5989B', '#CED3DC'];

const ColorPicker = ({ classes, value, onChange }) => {
  const handleChange = color => () => onChange(color);

  return (
    <div className={classes.colorPickerPanel}>
      {COLORS.map(color => (
        <button
          key={color}
          className={classNames(
            classes.colorPickerChoose,
            value === color ? classes.selected : ''
          )}
          style={{ backgroundColor: color }}
          onClick={handleChange(color)}
        />
      ))}
    </div>
  );
};

ColorPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(ColorPicker);
