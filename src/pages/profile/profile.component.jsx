import React, { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import firebase from '../../firebase/firebase.utils';

const ProfilePage = () => {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('UserIs Signed In');
      
    } else {
      // No user is signed in.
      console.log('UserIs NOT Signed In');

    }
  });

  useEffect(() => {
    setUserName(currentUser.displayName);
    setEmail(currentUser.email);
  }, [currentUser]);

  console.log(currentUser);

  var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  console.log(user);
  
} else {
  // No user is signed in.
  console.log('NO BODY HERE');

}

  return (
    <div>
      <h1>User Profile</h1> 
      <p>Name: {userName}</p>
  <p>Email: {email}</p>
    </div>
  );
};

export default ProfilePage;
