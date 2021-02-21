import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormDialog } from '../components/FormDialog';
import { Header } from '../components/Header';
import { GetGPSModal } from '../components/GetGPSModal';
import HeatMap from '../components/HeatMap';
import { LinkedButton } from '../components/LinkedButton';
import '../styles/mainmap.css';

export const MainMap = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/live_map');
  };

  return (
    <div>
      <Header 
        density={props.density}
      />
      <HeatMap setter={props.setter}/>
      <GetGPSModal />
      <FormDialog />
      <div id='daily_button'>
        <LinkedButton
          buttonText='Average'
          click={() => handleClick()}
        />
      </div>
    </div>
  )
}