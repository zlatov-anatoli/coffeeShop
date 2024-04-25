import React from 'react'
import classes from './About.module.css'
import classNames from 'classnames'
import aboutImg from '../../assets/about-img.jpg'
import { FiCheck } from 'react-icons/fi'

const About = () => {
  return (
    <section className={classNames(classes.about, 'section')} id="about">
      <div className={classNames(classes.aboutGrid, 'container', 'grid')}>
        <div className={classes.wrapper}>
          <img src={aboutImg} alt="" className={classes.img} />
        </div>

        <div className={classes.content}>
          <h2 className={classes.title} data-title="About Us">
            Fresh Quality and Organic Tasty Coffee House For You
          </h2>
          <p className={classes.description}>
            Your unique coffee corner awaits. Discover the art of coffee,
            exquisite blends, and a friendly atmosphere. Enjoy every moment,
            our service, and exclusive beverages.
          </p>
          <div className={classNames(classes.details, 'grid')}>
            <p className={classes.list}>
              <FiCheck className={classes.icon} />
              Explore the variety of flavors and aromas of our coffee.
            </p>
            <p className={classes.list}>
              <FiCheck className={classes.icon} />
              Learn the secrets of coffee masters from our baristas.
            </p>
            <p className={classes.list}>
              <FiCheck className={classes.icon} />
              Immerse yourself in the atmosphere and enjoyment with every cup.
            </p>
          </div>

          <a href="#team" className={classes.btn}>
            Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
