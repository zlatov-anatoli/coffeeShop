import React from 'react'
import classes from './Features.module.css'
import classNames from 'classnames'
import {features} from '../../Data'
import shape from '../../assets/shape.png'

const Features = () => {
  return (
    <section className={classNames(classes.features, 'section')} id="features">
      <h2 className={classes.title} data-title="Features">
        Our Best Features
      </h2>

      <div className={classNames(classes.featuresGrid, 'grid', 'container')}>
        {features.map(({img, title, description}, index) => {
          return (
            <div key={index} className={classes.item}>
              <img src={img} alt="" className={classes.image}/>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.description}>{description}</p>
              <img src={shape} alt="" className={classes.shape}/>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
