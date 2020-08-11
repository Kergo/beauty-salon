import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createDocument } from '../../firebase/firebase.utils';
import './contact-form.styles.scss';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    let data = { ...state };
    try {
      await createDocument('contacts', data);
      setState({ name: '', subject: '', email: '', message: '' });
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

  return (
    <div className="contact-form">
      <h2>Get in Touch With Us</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={state.name}
          handleChange={handleChange}
          label="Name"
          required
        />
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
          name="subject"
          value={state.subject}
          handleChange={handleChange}
          label="Subject"
          required
        />
        <textarea
          className="message"
          name="message"
          onChange={handleChange}
          value={state.message}
          placeholder="Your Message"
          required
        />
        <CustomButton type="submit"> Send </CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;
