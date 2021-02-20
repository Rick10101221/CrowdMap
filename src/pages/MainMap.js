import React from 'react';

import { FormDialog } from '../components/FormDialog';
import { Header } from '../components/Header';
import { GetGPSModal } from '../components/GetGPSModal';
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'

import '../styles/mainmap.css';

export const MainMap = () => {
  return (
    <div>
      <Header 
        density='dense'
      />
      <GetGPSModal />
      <div id='location-button'>
        <FormDialog />
      </div>
    </div>
  )
}