import React, { useState, useEffect, useContext } from 'react';
import { getInfoCollection } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import InfoContainer from '../../components/info-container/info-container.component';
import ServicesAppointmentInfo from '../../components/appointment/services-appointment-info/services-appointment-info.component';
import './homepage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getInfoCollection('homepage');
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="homepage-heading">
        <h1>Love Your Body!</h1>
        <div className="homepage-heading-image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beauty-salon-8a9d4.appspot.com/o/images%2Fuglyducklinn.png?alt=media&token=2cb9bc79-1316-4cbc-9df3-7cda8504f6a6"
            alt="ugly-duckling"
          />
        </div>
        <h1>Love Yourself!</h1>
      </div>
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
