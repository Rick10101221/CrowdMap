import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { useTrail, a } from 'react-spring'

import crowdLogo from '../images/crowdLogo.png';
import mapLogo from '../images/mapLogo.png';

import '../styles/home.css';
import '../styles/general_text.css';

export const Home = () => {
  const history = useHistory();
  const [open, setOpen] = useState(true);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  let crowdImg = (
    <img 
      src={crowdLogo} 
      alt='Crowd Logo'
      width='300'
      height='112'
    />
  )
  let mapImg = (
    <img
      src={mapLogo}
      alt='Map Logo'
      width='225'
      height='121'
    />
  )
  const items = [crowdImg, mapImg];

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[600]),
      backgroundColor: blue[600],
      '&:hover': {
        backgroundColor: blue[800],
      },
    },
  }))(Button);

  // For trail speed, alter tension
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 800, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  const handleClickOpen = () => {
    history.push('/map')
  };

  return (
    <div id='top-level-home'>

      <div id='images'>
        <div 
          className="trails-main" 
          onClick={() => setOpen((state) => !state)}
        >
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <a.div
                key={items[index]}
                className="trails-text"
                id='center'
                style={{ 
                  ...rest, 
                  transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) 
                }}>
                <a.div style={{ height }}>{items[index]}</a.div>
              </a.div>
            ))}
          </div>
        </div>
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