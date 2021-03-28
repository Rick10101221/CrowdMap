import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';

import '../styles/general_text.css';

export const LinkedButton = (props) => {
  const {
    buttonText,
    click
  } = props;

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[600]),
      backgroundColor: blue[600],
      '&:hover': {
        backgroundColor: blue[800],
      },
    },
  }))(Button);

  return (
    <div>
      <ColorButton
        variant="contained" 
        color="primary" 
        className={classes.margin} 
        onClick={click}
      >
        {buttonText}
      </ColorButton>
    </div>
  )
}