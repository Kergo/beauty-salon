import React, { useState, useContext, useEffect } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import styles from './profile-settings.module.css';
import CustomButton from '../custom-button/custom-button.component';
import { updateUserProfile } from '../../firebase/firebase.utils';

const ProfileSettings = () => {
  const [state, setState] = useState({
    displayName: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const currentUser = useContext(CurrentUserContext);

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

    try {
      await updateUserProfile(currentUser, additionalData)
    } catch (error) {
      console.error(error);
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
