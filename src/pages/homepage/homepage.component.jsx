import React, { useState, useEffect, useContext } from 'react';
import { getHomepageCollection } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import InfoContainer from '../../components/info-container/info-container.component';
import ServicesAppointmentInfo from '../../components/services-appointment-info/services-appointment-info.component';
import './homepage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getHomepageCollection();
      setData(response);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      {/* <h1>Love Your Body!</h1>
      <h1>Love Yourself!</h1> */}
      <ServicesAppointmentInfo />
      {data.map((info, idx) => {
        if (info.hide && currentUser) {
          return null;
        } else {
          return <InfoContainer key={idx} info={info} />;
        }
      })}
    </div>
  );
};

export default HomePage;
