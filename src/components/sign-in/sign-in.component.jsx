import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const alert = useAlert();

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: '', password: '' });
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
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
        <Link className="pass-reset" to="/reset-password">
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
