import React from 'react';

import '../styles/header.css';

export const Header = ({density='spacious'}) => {
  return (
    <div id='outer-header'>
      <span id='header-text'>
        Current Location: 
      </span>
      {
        density == 'spacious' &&
        <span id='spacious'>
          &nbsp; Spacious
        </span>
      }
      {
        density == 'dense' &&
        <span id='dense'>
          &nbsp; Dense
        </span>
      }
    </div>
  )
}