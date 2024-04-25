import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import basketStore from "../store/basketStore";
import classes from './basket/basket.module.css'

export default function DeleteDialog({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = () => {
    setOpen(false)
    basketStore.deleteSelectedItem(basketStore.selectedCoffe)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          backgroundColor: 'grey'
        }
      }}
    >
      <DialogTitle id="alert-dialog-title">
        Delete current item from order?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action is final and will allow you to modify your order before final confirmation. Proceed?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleApply} autoFocus className={classes.btnColor}>Confirm</Button>
        <Button onClick={handleClose} className={classes.btnColor}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
