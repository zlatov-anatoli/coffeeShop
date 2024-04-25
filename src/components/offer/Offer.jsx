import classNames from 'classnames'
import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import classes from './Offer.module.css'
import { offer } from '../../Data'

const Offer = () => {
  return (
    <section className={classNames(classes.offer, 'section')} id="offer">
      <h2 className={classes.title} data-title="Offer">
        Special Offer For You
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container"
      >
        {offer.map(({ id, img, title, description, discount }) => {
          return (
            <SwiperSlide className={classes.item} key={id}>
              <div className={classes.wrapper}>
                <img src={img} alt="" className={classes.img} />
              </div>
              <div className={classes.content}>
                <h3 className={classes.offerTitle}>{title}</h3>
                <span className={classes.discount}>{discount}</span>
                <p className={description}>{description}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Offer
