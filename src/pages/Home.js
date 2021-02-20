import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import { LinkedButton } from '../components/LinkedButton';

import '../styles/home.css';
import '../styles/general_text.css';

export const Home = () => {
  return (
    <div id='top-level-home'>
      <div>
        <LinkedButton
          buttonColor='rgba(76,144,246,1)'
          buttonText='BUTTON'
        />
      </div>
    </div>
  )
}

const bounceAnimation = keyframes`${bounce}`;

const BouncySpan = styled.span`
  animation: 1s ${bounceAnimation};
`;