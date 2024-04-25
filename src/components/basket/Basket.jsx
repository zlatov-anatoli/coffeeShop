import {observer} from "mobx-react-lite";
import basketStore from "../../store/basketStore";
import classNames from "classnames";
import classes from "./basket.module.css";
import React, {useState} from "react";
import logo from "../../assets/logo.png";
import {useNavigate} from "react-router-dom";
import {toJS} from "mobx";
import CancelIcon from '@mui/icons-material/Cancel';
import {Box, CircularProgress, IconButton} from "@mui/material";
import DeleteDialog from "../DeleteDialog";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import {DeleteAllBasket} from "../testimonials/DeleteAllBasket";
import {PaymentDialog} from "../payment/PaymentDialog";

export const Basket = observer((props) => {
  const [open, setOpen] = useState(false)
  const [allOpen, setAllOpen] = useState(false)
  const navigate = useNavigate()
  const menu = basketStore.basket
  const basket = basketStore.basket
  const [openPayment, setOpenPayment] = useState(false)
  const [loading, setLoading] = useState(false);

  const backToMainPage = () => {
    navigate('/')
  }

  const {count, price} = toJS(basket).reduce((acc, item) => {
    acc.count += item.count
    acc.price += item.count * item.price
    return acc
  }, {count: 0, price: 0})

  return (
    <>
      <div className='nav'>
        <div className={classes.logoContainer}>
          <img onClick={backToMainPage} src={logo} alt="logo" style={{width: '190px', cursor: 'pointer'}}/>
        </div>
        <div className='basket'
             style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <span style={{minWidth: '60px', textAlign: 'right', display: 'inline-block'}}>
                {price.toFixed(2)}$
              </span>
          <span className='vertical-line'></span>
          <div style={{display: 'flex', alignItems: 'center', gap: '5px', minWidth: '30px'}}>
            <span style={{minWidth: '20px', textAlign: 'center'}}>{count}</span>
            <ShoppingBasketIcon fontSize='small'/>
          </div>
        </div>
      </div>
      {basket.length === 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          textAlign: 'center',
          color: 'white'
        }}>
          <ShoppingCartIcon fontSize="large"/>
          <div style={{
            fontSize: '24px',
            marginTop: '20px'
          }}>Your basket is empty
          </div>
        </div>
      )}
      <div className='container'>
        {menu.length !== 0 && (
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: '10px 0'}}>
              <Button onClick={() => setAllOpen(true)} sx={{color: 'white'}}>Clear all basket</Button>
            </div>
            <Button variant='contained' onClick={() => setOpenPayment(true)}
                    sx={{color: 'black', backgroundColor: 'white'}}>Pay {price.toFixed(2)}$</Button>
          </div>
        )}
        <div className={classes.wrapper}>
          {menu.map(coffe => {
            return (
              <div key={coffe.id}
                   className={classNames(classes.item, 'grid')} onClick={() => basketStore.getSelectedCoffe(coffe)}>
                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                  <img src={coffe.img} alt="" className={classes.img}/>
                  <div className="">
                    <h2 className={classes.subtitle}>{coffe.title}</h2>
                    <p className={classes.description}>{coffe.description}</p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div className={classes.circle} onClick={() => basketStore.decrementBasketItem(coffe)}>-</div>
                  <span style={{minWidth: '30px'}}>{coffe.count}</span>
                  <div className={classes.circle} onClick={() => basketStore.addToBasket(coffe)}>+</div>
                </div>
                <div className={classes.data}>
                  <span className={classes.price}><p style={{minWidth: '80px'}}>${coffe.price * coffe.count}</p></span>
                </div>
                <div onClick={() => setOpen(true)}>
                  <IconButton size='medium' className={classes.iconButton}>
                    <CancelIcon className={classes.deleteItem}/>
                  </IconButton>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {loading && (
        <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1301
      }}>
        <CircularProgress size={60} color="success"/>
      </Box>
      )}
      <DeleteAllBasket open={allOpen} setOpen={setAllOpen}/>
      <DeleteDialog open={open} setOpen={setOpen}/>
      <PaymentDialog open={openPayment} setOpenPayment={setOpenPayment} setLoading={setLoading} props={props}/>
    </>
  )
})
