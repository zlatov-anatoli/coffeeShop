import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import classes from './Menu.module.css'
import {observer} from "mobx-react-lite";
import basketStore from "../../store/basketStore";

const Menu = observer(() => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('https://653a4de0e3b530c8d9e97778.mockapi.io/user')
      .then(response => response.json())
      .then(data => {
        setMenu(data)
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  return (
    <section className={classNames(classes.menu, 'section')} id="menu">
      <h2 className={classes.title} data-title=" Our Menu">
        Let's Check Our Menu
      </h2>

      <div className={classNames(classes.menuGrid, 'container', 'grid')}>
        {menu.map(coffe => {
          return (
            <div key={coffe.id} onClick={() => basketStore.addToBasket(coffe)}
                 className={classNames(classes.item, 'grid')}>
              <div className={classes.wrapper}>
                <img src={coffe.img} alt="" className={classes.img}/>
              </div>
              <div className={classes.data}>
                <div className="">
                  <h2 className={classes.subtitle}>{coffe.title}</h2>
                  <p className={classes.description}>{coffe.description}</p>
                </div>

                <span className={classes.price}>${coffe.price}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
})

export default Menu
