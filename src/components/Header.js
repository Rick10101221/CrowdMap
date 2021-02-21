import React from 'react';

import '../styles/header.css';

export const Header = (props) => {
  return (
    <div id='outer-header'>
      <span id='header-text'>
        Current Location: 
      </span>
      {
        props.density == 'spacious' &&
        <span id='spacious'>
          &nbsp; {props.density}
        </span>
      }
      {
        props.density == 'moderate' &&
        <span id='moderate'>
          &nbsp; {props.density}
        </span>
      }
      {
        props.density == 'dense' &&
        <span id='dense'>
          &nbsp; {props.density}
        </span>
      }
    </div>
  )
}