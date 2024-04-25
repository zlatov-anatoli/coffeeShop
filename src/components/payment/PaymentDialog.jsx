import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import Cards from 'react-credit-cards';
import InputMask from 'react-input-mask';
import 'react-credit-cards/es/styles-compiled.css';
import basketStore from "../../store/basketStore";
import {useNavigate} from "react-router-dom";

export const PaymentDialog = ({open, setOpenPayment, setLoading, props}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [displayCvc, setDisplayCvc] = useState('');
  const navigate = useNavigate()

  const isValid = name.length && expiry.length === 5 && cvc.length ===  3 && number.length === 19

  const handleCvcChange = (e) => {
    const input = e.target.value;
    const lastChar = input[input.length - 1];

    if (input.length <= cvc.length) {

      setCvc(input);
      setDisplayCvc('*'.repeat(input.length));
    } else if (/\d/.test(lastChar) && cvc.length < 3) {

      setCvc(cvc + lastChar);
      setDisplayCvc(displayCvc + '*');
    }
  };

  const handleClose = () => {
    setOpenPayment(false)
  }

  const handleApply = () => {
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
      basketStore.clearAllBasket()
      navigate('/')
      props.setOpen(true)
      props.setMessage('Your purchase has been successfully paid')
    }, 2000);

  };

  const [focus, setFocus] = useState('');
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth='xs'
      fullWidth={true}
      PaperProps={{
        style: {
          backgroundColor: 'white'
        }
      }}
    >
      <DialogTitle sx={{color: 'black'}} id="alert-dialog-title">
        Payment method card
      </DialogTitle>
      <DialogContent>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                cardCVCInputProps={{value: cvc}}
                focused={focus}
                style={{position: 'absolute', right: '10px', top: '5px', zIndex: 1}}
              />
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div>
              <Typography variant="subtitle1">Name</Typography>
              <TextField variant="outlined" value={name} onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z ]*$/.test(value)) {
                  setName(value);
                }
              }}
                         placeholder="Enter your name" fullWidth/>
            </div>
            <div style={{flex: 1, marginRight: '10px'}}>
              <Typography variant="subtitle1">Expiry Date</Typography>
              <TextField
                variant="outlined"
                placeholder="MM/YY"
                fullWidth
                value={expiry}
                onChange={(e) => {
                  const value = e.target.value;
                  const numericValue = value.replace(/[^\d/]/g, '');

                  let formattedValue = numericValue;

                  if (!formattedValue.includes('/')) {

                    if (formattedValue.length === 2) {
                      formattedValue += '/';
                    }
                  }

                  if (formattedValue.length > 5) {
                    formattedValue = formattedValue.slice(0, 5);
                  }

                  if (/^(\d{0,2}\/?\d{0,2})$/.test(formattedValue)) {
                    setExpiry(formattedValue);
                  }
                }}
              />
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            justifyContent: 'center',
            alignItems: 'end',
            gap: '15px'
          }}>
            <InputMask
              mask="9999 9999 9999 9999"
              value={number}
              onChange={e => setNumber(e.target.value)}
              onFocus={() => setFocus('number')}
              placeholder="Enter your card number"
            />
            <div>
              <Typography variant="subtitle1">CVV</Typography>
              <TextField
                variant="outlined"
                placeholder="CVV"
                fullWidth
                value={displayCvc}
                onChange={handleCvcChange}
              />
            </div>
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleApply} disabled={!isValid} autoFocus sx={{color: 'grey'}}>Confirm</Button>
        <Button onClick={handleClose} sx={{color: 'white', backgroundColor: 'grey'}} variant='contained'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>)
}
