import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormDialog } from '../components/FormDialog';
import { Header } from '../components/Header';
import { GetGPSModal } from '../components/GetGPSModal';
import HeatMapAvg from '../components/HeatMapAvg';
import { LinkedButton } from '../components/LinkedButton';
import '../styles/secondarymap.css';

export const SecondaryMap = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/map');
  };

  return (
    <div>
      <Header 
        density={props.density}
      />
      <HeatMapAvg />
      <GetGPSModal />
      <FormDialog />
      <div id='live_button'>
        <LinkedButton
          buttonText='Live'
          click={() => handleClick()}
        />
      </div>
    </div>
  )
}