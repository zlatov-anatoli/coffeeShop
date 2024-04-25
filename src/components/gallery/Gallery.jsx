import React from 'react'
import classes from './Gallery.module.css'
import classNames from 'classnames'
import { gallery } from '../../Data'
import { BsPlusLg } from 'react-icons/bs'

export const Gallery = () => {
  return (
    <section className={classNames(classes.gallery, 'section')} id="gallery">
      <h2 className={classes.title} data-title="Gallery">
        Our Photo Gallery
      </h2>

      <div className={classNames(classes.galleryGrid, 'container', 'grid')}>
        {gallery.map(({ id, img, title }) => {
          return (
            <div className={classes.item} key={id}>
              <img src={img} alt="" className={classes.img} />
              <div className={classes.icon}>
                <BsPlusLg />
              </div>
              <h3 className={classes.galleryTitle}>{title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
