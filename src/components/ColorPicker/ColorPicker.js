import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';

const COLORS = ['#FFF', '#FECB00', '#11CD86', '#E5989B', '#CED3DC'];

const styles = {
  colorPickerPanel: {
    display: 'flex',
    alignItems: 'center'
  },
  colorPickerChoose: {
    width: 25,
    height: 25,
    marginLeft: 5,
    border: 0,
    cursor: 'pointer',
    '&:first-child': {
      marginLeft: 0
    }
  },
  selected: {
    border: '2px solid #757575'
  }
};

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
