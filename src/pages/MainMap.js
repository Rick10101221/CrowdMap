import React from 'react';

import { FormDialog } from '../components/FormDialog';
import { Header } from '../components/Header';

import '../styles/mainmap.css';

export const MainMap = () => {
  return (
    <div>
      <Header 
        density='dense'
      />
      <div id='location-button'>
        <FormDialog />
      </div>
    </div>
  )
}