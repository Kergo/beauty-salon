import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createAppointmentDocument } from '../../firebase/firebase.utils';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';

import enGB from 'date-fns/locale/en-GB';
import { ReactComponent as Logo } from '../../assets/logo-green-small.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './appointment-popup.styles.scss';

const AppointmentPopup = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
  });
  const [startDate, setStartDate] = useState(new Date());
  let history = useHistory();
  registerLocale('en-GB', enGB);

  const handleSubmit = async e => {
    e.preventDefault();

    let data = { ...state, startDate };
    try {
      await createAppointmentDocument(data);
      setState({ name: '', phone: '', email: '', type: '' });
      setStartDate(new Date());
      history.push('/appointment-completed')
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDate = date => {
    setStartDate(date);
  };

  // Todo: 
  // Error handling-- Check if hour is less validate phone number
  // Implement recaptcha

  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__content--head">
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <i
            className="fas fa-times fa-2x"
            onClick={() => history.goBack()}
          ></i>
        </div>
        <div className="popup__content--header">
          <h2>Make an appointment at The Ugly Duckling</h2>
          <h4>Every procedure is a beautiful experience</h4>
        </div>
        <div className="popup__content--form">
          <form onSubmit={handleSubmit}>
            <div className="popup__content--form-body">
              <FormInput
                id="name"
                type="text"
                name="name"
                label="Name and Surname"
                value={state.name}
                handleChange={handleChange}
                required
              />
              <FormInput
                type="text"
                name="phone"
                label="Phone"
                value={state.phone}
                handleChange={handleChange}
                required
              />
            </div>
            <div className="popup__content--form-body">
              <FormInput
                type="email"
                name="email"
                value={state.email}
                handleChange={handleChange}
                label="Email"
                required
              />
              <FormInput
                type="text"
                name="type"
                label="I would like to make an appointment for:"
                value={state.type}
                handleChange={handleChange}
                required
              />
            </div>
            <div className="popup__content--form-footer">
              <DatePicker
                selected={startDate}
                onChange={handleDate}
                showTimeSelect
                timeIntervals={15}
                timeFormat="HH:mm"
                minDate={new Date()}
                inline
                showDisabledMonthNavigation
                locale="en-GB"
                placeholderText="Click to select a date and time"
                dateFormat="d MMMM, yyyy hh:mm"
              />
              <CustomButton type="submit">Make an appointment</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPopup;
