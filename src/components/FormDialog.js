import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { 
  createMuiTheme, 
  withStyles, 
  makeStyles, 
  ThemeProvider,
} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [addr, setAddr] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[600]),
      backgroundColor: blue[600],
      '&:hover': {
        backgroundColor: blue[800],
      },
    },
  }))(Button);

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: blue[600],
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: blue[600],
      },
    },
  })(TextField);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(addr, city, state, zip);
    console.log(values);
  };

  const checkFilled = () => {
    return values[addr] != '' && city != '' && state != '' && zip != '';
  }

  const values = {
    addr: '',
    city: '',
    state: '',
    zip: '',
  }

  let AddressField = (
    <CssTextField
      required
      value={addr}
      margin="dense"
      id="street_address"
      label="Street Address"
      onChange={(e) => setAddr(e.target.value)}
      fullWidth
    />
  )

  return (
    <div>
      <ColorButton 
        variant="contained" 
        color="primary" 
        className={classes.margin} 
        onClick={handleClickOpen}
      >
        Find Your Location
      </ColorButton>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Your Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your address into the fields below. This will find your GPS
            location and measure the density of pedestrians around your 
            area.
          </DialogContentText>

          {/* {AddressField} */}

          <TextField
            required
            value={addr}
            margin="dense"
            id="street_address"
            label="Street Address"
            onChange={(e) => setAddr(e.target.value)}
            fullWidth
          />

          <TextField
            required
            value={city}
            margin="dense"
            id="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
          <TextField
            required
            value={state}
            margin="dense"
            id="state"
            label="State"
            onChange={(e) => setState(e.target.value)}
            fullWidth
          />
          <TextField
            required
            value={zip}
            margin="dense"
            id="zip_code"
            label="Zip Code"
            onChange={e => setZip(e.target.value)}
            fullWidth
          />
          
          {/* <CssTextField
            required
            value={city}
            margin="dense"
            id="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
          <CssTextField
            required
            value={state}
            margin="dense"
            id="state"
            label="State"
            onChange={(e) => setState(e.target.value)}
            fullWidth
          />
          <CssTextField
            required
            value={zip}
            margin="dense"
            id="zip_code"
            label="Zip Code"
            onChange={e => setZip(e.target.value)}
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          {
          checkFilled() ? 
            <Button onClick={handleClose} color="primary">
              Compute Density
            </Button>
          :
            <Button disabled color='primary'>
              Compute Density
            </Button>
          }

        </DialogActions>
      </Dialog>

    </div>
  );
}
