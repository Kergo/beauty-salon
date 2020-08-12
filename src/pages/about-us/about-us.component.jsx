import React, { useState, useEffect } from 'react';
import { getInfoCollection } from '../../firebase/firebase.utils';
import InfoContainer from '../../components/info-container/info-container.component';
import styles from './about-us.module.css';

const AboutUsPage = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await getInfoCollection('about-us');
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles['hero-picture']}></div>
      <div className={styles['hero']}>
        <h1 className={styles['heading']}>About Us</h1>
        <h4 className={styles['sub-heading']}>
        'MY PASSIONATE BELIEF IS THAT BUSINESS CAN BE FUN, IT CAN BE CONDUCTED WITH LOVE AND A POWERFUL FORCE FOR GOOD.' – Someone Maybe
        </h4>
      </div>
      {data.map((info, idx) => {          
          return <InfoContainer key={idx} info={info}/>
      })}
    </div>
  );
};

export default AboutUsPage;
