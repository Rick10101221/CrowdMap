import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import '../styles/general_text.css';

export const LinkedButton = (props) => {
  const history = useHistory();

  const {
    buttonColor,
    buttonText,
  } = props;

  const outer_button_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: buttonColor,
    height: '8vh',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '125%',
    borderRadius: 5,
  }

  const inner_text = {
    fontSize: '20px',
  }

  return (
    <div 
      onClick={() => history.push('/map')} 
      style={outer_button_style}
    >
      <span id='lighter-text' style={inner_text}>
        {buttonText}
      </span>
    </div>
  )
}