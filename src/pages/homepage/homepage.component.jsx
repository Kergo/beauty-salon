import React, { useState, useEffect } from 'react';
import { getHomepageCollection } from '../../firebase/firebase.utils';
import PlasticForChangeInfo from '../../components/info-container/info-container.component';
import './homepage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getHomepageCollection();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Love Your Body!</h1>
      <h1> Love Yourself!</h1>
      {data.map((info, idx) => {
        return <PlasticForChangeInfo key={idx} info={info} />;
      })}
    </div>
  );
};

export default HomePage;
