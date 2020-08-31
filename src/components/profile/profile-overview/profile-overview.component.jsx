import React, { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../../../contexts/current-user/current-user.context';
import styles from './profile-overview.module.css';
import { getHomepagePartOfTheStoryDocument } from '../../../firebase/firebase.utils';
import InfoContainer from '../../info-container/info-container.component';
import Spinner from '../../spinner/spinner.component';
const ProfileOverview = () => {
  const [data, setData] = useState({
    heading: '',
    infoHeader: '',
    imageUrl: '',
    paragraphs: [],
  });
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getHomepagePartOfTheStoryDocument();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Hi there {currentUser.displayName} ^_^</h1>
      <h3>You Have Earned {currentUser.totalPoints} Points.</h3>
      <h3>Good Job!</h3>
      <h4>You Can Contact our team to use your points at any time you want!</h4>
      {data.heading === '' ? (
        <Spinner />
      ) : (
        <div className={styles['info-container']}>
          <InfoContainer info={data} />
        </div>
      )}
    </div>
  );
};

export default ProfileOverview;
