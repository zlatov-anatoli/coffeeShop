import React from 'react'
import classes from './Choose.module.css'
import classNames from 'classnames'
import chooseImg from '../../assets/choose.jpg'
import coffeeMug from '../../assets/coffee-mug.svg'
import coffeeBeansTwo from '../../assets/coffee-beans-2.svg'
import coffeeBeansThree from '../../assets/coffee-beans-3.svg'

const Choose = () => {
  return (
    <section className={classNames(classes.choose, 'section')}>
      <div className={classNames(classes.chooseGrid, 'container', 'grid')}>
        <div className={classes.content}>
          <h2 className={classes.title} data-title="Why Choose Us">
            Cofferro Most Out Of Your Favorite & Tasty Coffee House
          </h2>

          <p className={classes.description}>
            Choose us for a unique coffee experience where quality meets comfort.
            Enjoy meticulously selected beans and custom blends crafted with care
            and precision to enhance every sip and delight every sense.
          </p>

          <div className={classNames(classes.details, 'grid')}>
            <div className={classes.item}>
              <div className={classes.wrapper}>
                <img src={coffeeMug} alt="" className={classes.image} />
              </div>

              <div>
                <h3 className={classes.detailsTitle}>Awesome Aroma</h3>
                <p className={classes.detailsDescription}>
                  Discover the invigorating aroma of our coffee, which promises
                  a refreshing start to your day and a peaceful break in your busy schedule.
                </p>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.wrapper}>
                <img src={coffeeBeansTwo} alt="" className={classes.image} />
              </div>

              <div>
                <h3 className={classes.detailsTitle}>Pure Grades</h3>
                <p className={classes.detailsDescription}>
                  Experience the highest quality with our pure, top-grade beans sourced
                  from the best farms worldwide, ensuring rich and robust flavors.
                </p>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.wrapper}>
                <img src={coffeeBeansThree} alt="" className={classes.image} />
              </div>

              <div>
                <h3 className={classes.detailsTitle}>Healthy Coffee</h3>
                <p className={classes.detailsDescription}>
                  Enjoy our health-conscious brewing methods that not only enhance flavor
                  but also retain all the beneficial antioxidants of coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={chooseImg} alt="" className={classes.flexImage} />
      </div>
    </section>
  )
}

export default Choose
