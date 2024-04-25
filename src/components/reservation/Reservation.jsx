import React, {useState} from 'react'
import {FaRegBookmark} from 'react-icons/fa'
import shapeTwo from '../../assets/shape-2.png'
import shapeThree from '../../assets/shape-3.png'
import './reservation.css'
import DoneIcon from '@mui/icons-material/Done';
import InputMask from 'react-input-mask';
import {observer} from "mobx-react-lite";

export const Reservation = observer((props) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      message: ''
    });
    const [showReserved, setShowReserved] = useState(false);

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

    const validateEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    }

    const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '') && validateEmail(formData.email)

    const handleSubmit = (e) => {
      props.setOpen(true)
      props.setMessage('Your table was reserved, successfully')
      e.preventDefault();
      setShowReserved(true);
      setTimeout(() => setShowReserved(false), 3000);
    }

    return (
      <section className="reservation container" id="reservation">
        <h2 className="section__title" data-title="Reservation">
          A Book Table
        </h2>

        <div className="reservation__form grid">
          <div className="form__input-div">
            <input type="text" name="name" className="form__input" placeholder="Your Name" value={formData.name}
                   onChange={handleChange}/>
          </div>
          <div className="form__input-div">
            <input type="email" name="email" className="form__input" placeholder="Your Email Address"
                   value={formData.email} onChange={handleChange}/>
          </div>
          <div className="form__input-div">
            <input type="text" name="phone" className="form__input" placeholder="Your Phone" value={formData.phone}
                   onChange={handleChange}/>
          </div>
          <div className="form__input-div">
            <InputMask
              mask="99/99/9999"
              value={formData.date}
              onChange={handleChange}
              placeholder="Date Ex: DD/MM/YY"
              className="form__input"
              name="date"
            />
          </div>
          <div className="form__input-div">
            <input type="text" name="time" className="form__input" placeholder="Time Ex: 01:25PM" value={formData.time}
                   onChange={handleChange}/>
          </div>
          <div className="form__input-div">
            <input type="text" name="people" className="form__input" placeholder="Number of People"
                   value={formData.people} onChange={handleChange}/>
          </div>
          <div className="form__input-div form__input-textarea">
            <textarea name="message" className="form__input" placeholder="Your Message" value={formData.message}
                      onChange={handleChange}></textarea>
          </div>

          <button disabled={!allFieldsFilled} onClick={handleSubmit} className="btn btn--flex reservation__btn">
            {showReserved ? <><DoneIcon style={{color: 'green', marginRight: '10px'}}/> Reserved</> :
              <><FaRegBookmark/> Book A Table</>}
          </button>
        </div>

        <img src={shapeTwo} alt="" className="shape__two"/>
        <img src={shapeThree} alt="" className="shape__three"/>
      </section>
    )
  }
)
