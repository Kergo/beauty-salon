import React, { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign.up.component';
import CustomButton from '../../components/button/custom-button/custom-button.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
  let [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="sign-in-buttons">
        <CustomButton onClick={() => setToggle((toggle = !toggle))}>
          {toggle ? 'Sign Up' : 'Sign In'}
        </CustomButton>
      </div>
      <div className="sign-in-and-sign-up">
        {toggle ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default SignInAndSignUpPage;
