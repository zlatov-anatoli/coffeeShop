import React from 'react'
import classes from './Home.module.css'
import classNames from 'classnames'

const Home = () => {
  return (
      <section className={classes.home} id='home'>
        <div className={classes.homeContainer}>
          <div className={classes.content}>
            <span className={classes.subtitle}>Welcome To Coffero!</span>
            <h1 className={classes.title}>
              Discover Amazing Coffee House & Get Energy
            </h1>
            <p className={classes.description}>
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour or
              randomised words.
            </p>

            <div className={classes.buttons}>
              <a href="#menu" className={classes.btn}>
                Check Menu
              </a>
              <a
                href="#reservation"
                className={classNames(classes.btn, classes.btnHome)}
              >
                Book Table
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home
