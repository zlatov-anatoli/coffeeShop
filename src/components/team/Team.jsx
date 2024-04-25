import classNames from 'classnames'
import React from 'react'
import classes from './Team.module.css'
import chef1 from '../../assets/team-1.jpg'
import chef2 from '../../assets/team-2.jpg'
import chef3 from '../../assets/team-3.jpg'
import chef4 from '../../assets/team-4.jpg'

import {FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'

const Team = () => {
  return (
    <section className={classNames(classes.team, 'section')} id="team">
      <h2 className={classes.title} data-title="Team">
        Meet Our Experts
      </h2>

      <div className={classNames(classes.teamGrid, 'grid', 'container')}>
        <div className={classes.item}>
          <img src={chef1} alt="" className={classes.image}/>

          <div className={classes.data}>
            <h3 className={classes.dataTitle}>Mallisa Fie</h3>
            <p className={classes.job}> Senior Chef</p>
          </div>

          <div className={classes.socials}>
            <a href="https://www.facebook.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaFacebookF/>
            </a>
            <a href="https://www.linkedin.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaLinkedinIn/>
            </a>
            <a href="https://www.youtube.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaYoutube/>
            </a>
            <a href="https://www.twitter.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaTwitter/>
            </a>
          </div>
        </div>
        <div className={classes.item}>
          <img src={chef2} alt="" className={classes.image}/>

          <div className={classes.data}>
            <h3 className={classes.dataTitle}>Roman Dunav</h3>
            <p className={classes.job}> Middle Chef</p>
          </div>

          <div className={classes.socials}>
            <a href="https://www.facebook.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaFacebookF/>
            </a>
            <a href="https://www.linkedin.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaLinkedinIn/>
            </a>
            <a href="https://www.youtube.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaYoutube/>
            </a>
            <a href="https://www.twitter.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaTwitter/>
            </a>
          </div>
        </div>
        <div className={classes.item}>
          <img src={chef3} alt="" className={classes.image}/>

          <div className={classes.data}>
            <h3 className={classes.dataTitle}>Artiom Codrov</h3>
            <p className={classes.job}> Junior Chef</p>
          </div>

          <div className={classes.socials}>
            <a href="https://www.facebook.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaFacebookF/>
            </a>
            <a href="https://www.linkedin.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaLinkedinIn/>
            </a>
            <a href="https://www.youtube.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaYoutube/>
            </a>
            <a href="https://www.twitter.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaTwitter/>
            </a>
          </div>
        </div>
        <div className={classes.item}>
          <img src={chef4} alt="" className={classes.image}/>

          <div className={classes.data}>
            <h3 className={classes.dataTitle}>Daria Krilova</h3>
            <p className={classes.job}> Ability Chef</p>
          </div>

          <div className={classes.socials}>
            <a href="https://www.facebook.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaFacebookF/>
            </a>
            <a href="https://www.linkedin.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaLinkedinIn/>
            </a>
            <a href="https://www.youtube.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaYoutube/>
            </a>
            <a href="https://www.twitter.com" className={classes.link} rel='noopener noreferrer' target="_blank">
              <FaTwitter/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
