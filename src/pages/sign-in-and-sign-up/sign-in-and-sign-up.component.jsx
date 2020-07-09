import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign.up.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in-and-sign-up.styles.scss';
import { render } from '@testing-library/react';

class SignInAndSignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }
  signIn = () => {
    this.setState({
      hide: true,
    });
  };
  signUp = () => {
    this.setState({
      hide: false,
    });
  };

  render() {
    return (
      <div>
        <div className="sign-in-buttons">
          <CustomButton
            onClick={this.signIn}
            className={`${this.state.hide ? 'inverted' : ''} custom-button`}
          >
            Sign In
          </CustomButton>
          <CustomButton
            onClick={this.signUp}
            className={`${this.state.hide ? '' : 'inverted'} custom-button`}
          >
            Sign Up
          </CustomButton>
        </div>
        <div className="sign-in-and-sign-up">
          {this.state.hide ? <SignIn /> : <SignUp />}
        </div>
      </div>
    );
  }
}

export default SignInAndSignUpPage;
