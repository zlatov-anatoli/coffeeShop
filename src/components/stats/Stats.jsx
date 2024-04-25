import classNames from 'classnames'
import React from 'react'
import classes from './Stats.module.css'
import coffeeShop from '../../assets/coffee-shop.svg'
import coffeeCup from '../../assets/coffee-cup.svg'
import experience from '../../assets/experience.svg'
import chef from '../../assets/chef.svg'

const Stats = () => {
  return (
    <section className={classNames(classes.stats, 'section')}>
      <div className={classNames(classes.statsGrid, 'grid', 'container')}>
        <div className={classes.item}>
          <div className={classes.wrapper}>
            <img src={coffeeShop} alt="" className={classes.image} />
          </div>

          <div>
            <p className={classes.no}>1500</p>
            <h3 className={classes.title}> + Total Branches</h3>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.wrapper}>
            <img src={coffeeCup} alt="" className={classes.image} />
          </div>

          <div>
            <p className={classes.no}>250</p>
            <h3 className={classes.title}> + Happy Customers</h3>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.wrapper}>
            <img src={chef} alt="" className={classes.image} />
          </div>

          <div>
            <p className={classes.no}>120</p>
            <h3 className={classes.title}> + Professional Chefs</h3>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.wrapper}>
            <img src={experience} alt="" className={classes.image} />
          </div>

          <div>
            <p className={classes.no}>50</p>
            <h3 className={classes.title}> + Years Of Experience</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
