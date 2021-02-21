import React, { useState } from 'react';

import { FormDialog } from '../components/FormDialog';
import { Header } from '../components/Header';
import { GetGPSModal } from '../components/GetGPSModal';
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'

import crowdLogo from '../images/crowdLogo.png';
import mapLogo from '../images/mapLogo.png';
import '../styles/mainmap.css';

export const MainMap = () => {

  return (
    <div>
      <Header 
        density='dense'
      />
      <GetGPSModal />

      {/* <div className="trails-main" onClick={() => setOpen((state) => !state)}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div> */}

      <div id='location-button'>
        <FormDialog />
      </div>
    </div>
  )
}