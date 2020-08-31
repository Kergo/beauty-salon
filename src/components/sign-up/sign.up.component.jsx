import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useAlert } from 'react-alert';

import './sign-up.styles.scss';

const SignUp = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const alert = useAlert();

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = state;
    // Check if passwords match
    if (password !== confirmPassword) {
      alert.error('password does not match!');
      return;
    }

    try {
      // Create user document with email and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // Clear our form
      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
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

  const { displayName, email, password, confirmPassword } = state;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
