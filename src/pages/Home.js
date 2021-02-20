import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


import { LinkedButton } from '../components/LinkedButton';
import crowdLogo from '../images/crowdLogo.png';
import mapLogo from '../images/mapLogo.png';

import '../styles/home.css';
import '../styles/general_text.css';

export const Home = () => {
  const history = useHistory();

  const handleClickOpen = () => {
    history.push('/map')
  };

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
    <div id='top-level-home'>
      <div id='images'>
        <img 
          src={crowdLogo} 
          alt='Crowd Logo'
          width='300'
          height='112'
        />
        <img
          src={mapLogo}
          alt='Map Logo'
          width='225'
          height='121'
        />
      </div>
      <div id='button'>
        <ColorButton 
          variant="contained" 
          color="primary" 
          className={classes.margin} 
          onClick={handleClickOpen}
        >
          BUTTON
        </ColorButton>
      </div>
    </div>
  )
}

const bounceAnimation = keyframes`${bounce}`;

const BouncySpan = styled.span`
  animation: 1s ${bounceAnimation};
`;