import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createDocument } from '../../firebase/firebase.utils';
import { useAlert } from 'react-alert';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components//button/custom-button/custom-button.component';
import styles from './registration-at-home.module.css';

const RegistrationAtHomePage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  let history = useHistory();
  const alert = useAlert();
  const handleSubmit = async e => {
    e.preventDefault();

    let data = { ...state };
    const myPhoneRegEx = /08[789]\d{7}/g;

    if (!myPhoneRegEx.test(state.phone) || state.phone.length > 10) {
      alert.error('Ohhh Please Enter a valid Bulgarian Mobile Number ;)');
      return;
    }
    try {
      await createDocument('register-at-home', data);
      setState({ firstName: '', lastName: '', email: '', phone: '' });
      history.push('/form-submited');
    } catch (error) {
      alert.error(error.message);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className={styles['wrapper']}>
      <div className={styles['hero-picture']}></div>
      <div className={styles['info-container']}>
        <h1 className={styles['title']}>Be Part Of Our Family</h1>
        <h3>Register With The The Ugly Duckling at Home ™</h3>
        <h4 className={styles['mb']}>
          You don't need experience to be a Consultant, just a love and passion
          for The Ugly Duckling! We will empower you, we will equip you.
        </h4>
        <h4 className={styles['mb']}>
          Earn an income selling our iconic products from home – even virtually.
          Be part of something great: more than a job, a beauty movement.
        </h4>
        <p>
          Become an Independent Consultant, sharing our products virtually with
          your network and earning money at the same time. All training
          provided, no experience necessary. You don’t even need to leave home;
          all products get sent directly to your customers. To find out more
          about becoming an Independent Consultant OR hosting, sign up below –
          we look forward to speaking to you. Regrettably we are unable to reply
          to requests outside of the Ocean. Please be aware to join The Ugly
          Duckling At Home™ or host a party you need to be 18 years or older.
        </p>
      </div>
      <div className={styles['register-form-container']}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            label="First Name"
            value={state.firstName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="text"
            name="lastName"
            label="Last Name"
            value={state.lastName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email Address"
            value={state.email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="text"
            name="phone"
            label="Phone Number"
            value={state.phone}
            handleChange={handleChange}
            required
          />
          <CustomButton type="submit">Confirm</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default RegistrationAtHomePage;
