import React, { useState, useContext, useEffect } from 'react';
import { useAlert } from 'react-alert';
import FormInput from '../../form-input/form-input.component';
import CurrentUserContext from '../../../contexts/current-user/current-user.context';
import CustomButton from '../../button/custom-button/custom-button.component';
import { updateUserProfile } from '../../../firebase/firebase.utils';
import styles from './profile-settings.module.css';


const ProfileSettings = () => {
  const [state, setState] = useState({
    displayName: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const currentUser = useContext(CurrentUserContext);
  const alert = useAlert();

  useEffect(() => {
    setState({
      displayName: currentUser.displayName,
      firstName: currentUser.firstName || '',
      lastName: currentUser.lastName || '',
      phone: currentUser.phone || '',
    });
  }, [currentUser]);

  const handleSubmit = async e => {
    e.preventDefault();

    const additionalData = state;

    const myPhoneRegEx = /08[789]\d{7}/g;
    

    if (!myPhoneRegEx.test(state.phone) || state.phone.length > 10) {
      alert.error("Ohhh Please Enter a valid Bulgarian Mobile Number ;)");
      return;
    }

    try {
      await updateUserProfile(currentUser, additionalData)
      alert.success('Good Job! You Updated Your Profile Successfully')
    } catch (error) {
      alert.error(error.message)
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles['wrapper']}>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          handleChange={handleInputChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="firstName"
          value={state.firstName}
          handleChange={handleInputChange}
          label="First Name"
        />
        <FormInput
          type="text"
          name="lastName"
          value={state.lastName}
          handleChange={handleInputChange}
          label="Last Name"
        />
        <FormInput
          type="text"
          name="phone"
          value={state.phone}
          handleChange={handleInputChange}
          label="Mobile (optional)"
        />
            <CustomButton type="submit">Update</CustomButton>
        
      </form>
    </div>
  );
};

export default ProfileSettings;
