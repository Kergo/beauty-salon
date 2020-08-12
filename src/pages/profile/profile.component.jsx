import React, { useContext } from 'react';
import ProfileNav from '../../components/profile-nav/profile-nav.component';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import firebase, {
} from '../../firebase/firebase.utils';
import ProfileOrders from '../../components/profile-orders/profile-orders.component';
import styles from './profile.module.css';
import { Switch, Route } from 'react-router-dom';
import ProfileOverview from '../../components/profile-overview/profile-overview.component';
import ProfileSettings from '../../components/profile-settings/profile-settings.component';

const ProfilePage = () => {
  // const [userName, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  const currentUser = useContext(CurrentUserContext);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('UserIs Signed In');
    } else {
      // No user is signed in.
      console.log('UserIs NOT Signed In');
    }
  });

  // useEffect(() => {
  //   setUserName(currentUser.displayName);
  //   setEmail(currentUser.email);
  // }, [currentUser]);

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
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-left']}>
        <ProfileNav />
        {/* <h2>Be Part Of the Family</h2> */}
      </div>
      <div className={styles['wrapper-right']}>
        <Switch>
          <Route exact path="/profile" component={ProfileOverview} />
          <Route path="/profile/orders" component={ProfileOrders} />
          <Route path="/profile/settings" component={ProfileSettings} />
        </Switch>

      </div>
    </div>
  );
};

export default ProfilePage;
