import React, {useState} from 'react'
import logo from '../../assets/logo.png'
import {
  FaFacebookF,
  FaRegEnvelope,
  FaCaretRight,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdOutlineLocationOn} from 'react-icons/md'
import './footer.css'

const Footer = () => {
  const [sub, setSub] = useState(false)

  const [email, setEmail] = useState('')

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const validate = validateEmail(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSub(true);
    setTimeout(() => {
      setEmail('')
      setSub(false)
    }, 2000);
  }

  return (
    <footer className="footer">
      <div className="footer__grid container grid">
        <div className="footer__content">
          <a href="#home" className="footer__logo">
            <img src={logo} alt="" className="footer__logo-img"/>
          </a>

          <p className="footer__description">
            Dive into the world of Cofferro, where each cup of coffee is a unique blend of flavor, tradition, and innovation. Join us for a memorable coffee journey at the heart of New York.
          </p>

          <ul className="footer__contact">
            <li className="footer__contact-item">
              <AiOutlinePhone className="icon"/> +2 767 543 0978
            </li>
            <li className="footer__contact-item">
              <MdOutlineLocationOn className="icon"/> 25/B Milford Road, New
              York
            </li>
            <li className="footer__contact-item">
              <FaRegEnvelope className="icon"/> info@example.com
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                <FaCaretRight className="icon"/> About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="footer__link">
                <FaCaretRight className="icon"/> Menu
              </a>
            </li>
            <li>
              <a href="#features" className="footer__link">
                <FaCaretRight className="icon"/> Features
              </a>
            </li>
            <li>
              <a href="#gallery" className="footer__link">
                <FaCaretRight className="icon"/> Gallery
              </a>
            </li>
            <li>
              <a href="#team" className="footer__link">
                <FaCaretRight className="icon"/> Team
              </a>
            </li>
            <li>
              <a href="#reservation" className="footer__link">
                <FaCaretRight className="icon"/> Reservation
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Opening Hours</h3>
          <div className="footer__opening-hour">
            <ul className="opening__hour-list">
              <li className="opening__hour-item">
                <span>Saturday:</span>
                <span>09AM-06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Monday:</span>
                <span>09AM-06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Tuesday:</span>
                <span>09AM-06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Wednesday:</span>
                <span>09AM-06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Thursday:</span>
                <span>09AM-06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Friday:</span>
                <span>09AM-06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Newletter</h3>
          <p className="footer__description">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>

          <form action="" className="subscribe__form">
            <input
              className="form__input subscribe__input"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button disabled={!validate} onClick={handleSubmit} className=" btn btn--flex subscribe__btn">
              <FaRegEnvelope/> {!sub ? 'Subscribe Now' : 'Subscribed'}
            </button>
          </form>

          <div className="footer__socials">
            <h3 className="footer__social-follow">Follow Us:</h3>
            <div className="footer__social-links">
              <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer' className="footer__social-link">
                <FaFacebookF/>
              </a>
              <a href="https://twitter.com/" target='_blank' rel='noopener noreferrer' className="footer__social-link">
                <FaTwitter/>
              </a>
              <a href="https://www.linkedin.com/" target='_blank' rel='noopener noreferrer' className="footer__social-link">
                <FaLinkedinIn/>
              </a>
              <a href="https://www.youtube.com/" target='_blank' rel='noopener noreferrer' className="footer__social-link">
                <FaYoutube/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright__text">
        &copy; Copyright 2024 <span>Coffero</span> All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
