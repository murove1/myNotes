import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import TrashIcon from 'material-ui-icons/Delete';
import Chip from 'material-ui/Chip';
import NoteEditor from '../NoteEditor';
import styles from './styles';

const NoteCard = props => {
  const {
    classes,
    id,
    title,
    text,
    color,
    labels,
    homeList,
    trashList,
    labelList,
    deleteFromTrash,
    deleteNote
  } = props;

  const handleDeleteNoteFromTrash = () => deleteFromTrash(id);
  const handleDeleteNoteToTrash = () => deleteNote(id);

  return (
    <Card className={classes.card} style={{ backgroundColor: color }}>
      {(homeList || labelList) && (
        <div className={classes.cardHeaderAction}>
          <NoteEditor id={id} title={title} text={text} />
          <IconButton
            className={classes.actionButton}
            onClick={handleDeleteNoteToTrash}>
            <TrashIcon />
          </IconButton>
        </div>
      )}
      {trashList && (
        <div className={classes.cardHeaderAction}>
          <IconButton
            className={classes.actionButton}
            onClick={handleDeleteNoteFromTrash}>
            <TrashIcon />
          </IconButton>
        </div>
      )}
      <div className={classes.cardTitle}>
        <Typography type="title" align="center">
          {title}
        </Typography>
      </div>
      <CardContent className={classes.cardContent}>
        <Typography component="p">{text}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {labels.map(label => (
          <Chip key={label} label={label} className={classes.chip} />
        ))}
      </CardActions>
    </Card>
  );
};

NoteCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  homeList: PropTypes.bool,
  trashList: PropTypes.bool,
  labelList: PropTypes.bool,
  deleteFromTrash: PropTypes.func,
  deleteNote: PropTypes.func
};

NoteCard.defaultProps = {
  title: 'Title',
  homeList: false,
  trashList: false,
  labelList: false,
  deleteFromTrash: null,
  deleteNote: null
};

export default withStyles(styles)(NoteCard);
