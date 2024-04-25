import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import basketStore from "../../store/basketStore";
import {observer} from "mobx-react-lite";

export const DeleteAllBasket = observer(({open, setOpen}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearBasket = () => {
    basketStore.clearAllBasket()
    handleClose()
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          backgroundColor: 'grey'
        }
      }}
    >
      <DialogTitle id="responsive-dialog-title">
        {"Are you sure you want to empty your cart?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          This action will remove all items that have been added to your cart and cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{color: 'white'}} autoFocus onClick={handleClearBasket}>
          Confirm
        </Button>
        <Button sx={{color: 'white'}} onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
)
