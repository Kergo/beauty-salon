import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import { ReactComponent as Logo } from '../../assets/logo-green-small.svg';
import CustomButton from '../custom-button/custom-button.component';
import { sendResetPasswordEmail } from '../../firebase/firebase.utils';

const ForgotPasswordPopup = () => {
  const [email, setEmail] = useState('');
  let history = useHistory();

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
          <h2>FORGOT YOUR PASSWORD?</h2>
          <h4>
            Enter your registered email address and we'll send you a link to
            reset your password.
          </h4>
        </div>
        <div className="popup__content--form">
          <form>
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={email}
              handleChange={e => setEmail(e.target.value)}
              required
            />
            <CustomButton
              onClick={() => {
                history.push('/signin');
                sendResetPasswordEmail(email);
              }}
            >
              Reset Password
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
