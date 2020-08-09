import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from './plastic-for-change.module.css';
import { getPlasticForChangeCollection } from '../../firebase/firebase.utils';
import InfoContainer from '../../components/info-container/info-container.component';

const PlasticForChangePage = () => {
  const [data, setData] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPlasticForChangeCollection();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles['hero-picture']}></div>
      <div className={styles['hero']}>
        <h1 className={styles['heading']}>Community Trade Recycled Plastic</h1>
        <h4 className={styles['sub-heading']}>
          At The Ugly Duckling, we’re committed to tackling the plastic crisis
          differently. Discover how we’re fighting for people and the planet
          with Community Trade recycled plastic from Bengaluru, India. Our trade
          will help empower the waste pickers we support with access to more
          sanitary working conditions, a fair price and the respect and
          recognition they deserve.
        </h4>
      </div>
      {data.map((info, idx) => {          
          return <InfoContainer key={idx} info={info}/>
      })}
    </div>
  );
};

export default PlasticForChangePage;
