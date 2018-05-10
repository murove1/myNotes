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

export default styles;
