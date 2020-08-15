import React, { useState, useEffect } from 'react';

import { firestore } from '../../firebase/firebase.utils';
import styles from './dashboard-messages.module.css';
import MessageCard from '../message-card/message-card.component';

const DashboardMessages = () => {
  const [data, setData] = useState([]);

  const refCol = firestore
    .collection('contacts')
  let unsubscribe = null;
  const fetchData = async () => {
    unsubscribe = refCol.onSnapshot(querySnapShot => {
      let data = [];
      querySnapShot.forEach(doc => data.push({ ...doc.data(), id: doc.id }));
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  let nothingForToday = false;
  data.forEach(message => {
    if (!message.confirmed) nothingForToday = true;
  });

  if (!nothingForToday) return <h1>You Have No Messages For Today!</h1>;

  return (
    <div>
      <h1 className={styles['title']}>Messages For Today</h1>
      <div className={styles['wrapper']}>
        {data.map((message, idx) =>
          !message.confirmed ? (
            <MessageCard key={idx} message={message} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DashboardMessages;
