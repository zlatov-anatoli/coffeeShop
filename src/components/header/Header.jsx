import React, {useEffect, useState} from 'react'

import logo from '../../assets/logo.png'
import {links} from '../../Data'
import {FaStream} from 'react-icons/fa'
import './header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import basketStore from "../../store/basketStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {toJS} from "mobx";

const Header = observer(() => {
  const [scrollHeader, setScrollHeader] = useState(false)
  const basket = basketStore.basket
  const navigate = useNavigate()
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }

  const {count, price} = toJS(basket).reduce((acc, item) => {
    acc.count += item.count
    acc.price += item.count * item.price
    return acc
  }, {count: 0, price: 0})


  useEffect(() => {
    window.addEventListener('scroll', changeHeader)
  }, [])

  const navigateToBasket = () => {
    navigate('basket')
  }

  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className="nav">
        <div className="nav__logo">
          <img src={logo} alt="logo coffeshop site"/>
        </div>

        <div className="nav__menu">
          <ul className="nav__list">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={navigateToBasket} className='basket'
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
        <div className="nav__toggle">
          <FaStream/>
        </div>
      </nav>
    </header>
  )
})

export default Header
