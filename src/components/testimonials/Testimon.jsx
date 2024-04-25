import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaStar } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'
import { testimonials } from '../../Data'
import './testimon.css'

const Testimon = () => {
  return (
    <section className="testimon container section" id="testimonials">
      <h2 className="section__title" data-title="Testimonials">
        What Client Say's
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
      >
        {testimonials.map(({ id, img, title, description, service }) => {
          return (
            <SwiperSlide className="testimon__item" key={id}>
              <div className="testimon__quote">
                <p className="testimon__description">{description}</p>
                <VscTriangleDown className="testimon__icon" />
              </div>

              <div className="testimon__content">
                <div className="testimon__img-wrapper">
                  <img className="testimon__img" src={img} alt="" />
                </div>

                <div>
                  <h3 className="testimon__title">{title}</h3>
                  <p className="testimon__service">{service}</p>

                  <div className="testimon__rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimon
