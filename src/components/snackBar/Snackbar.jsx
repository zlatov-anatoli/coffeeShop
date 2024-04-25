import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const Snackbars = ({open, setOpen, message}) => {

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    return (
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{width: '100%'}}
          >
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
