import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import BarLoader from "react-spinners/BarLoader";
// Bar.Loader
// Fade.Loader
// Moon.Loader
// Puff.Loader
// Scale.Loader
// Sync.Loader


import '../styles/general_text.css';
import '../styles/gpsmodal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgba(100,100,100,0.9)',
    border: '2px solid #fff',
    borderRadius: '4px',
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function GetGPSModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 2000)
    }
  }, [open])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        disableBackdropClick
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div id='modal-text' className={classes.paper}>
            <BarLoader
              color='#4287f5'
              loading={true}
              size={200} 
            />
            <br/>
            <p id='smaller-text'>Getting GPS Location</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
