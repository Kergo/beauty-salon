import React, { useState, useEffect, useContext } from 'react';
import { getHomepageCollection } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import InfoContainer from '../../components/info-container/info-container.component';
import ServicesPage from '../services/services.component';
import './homepage.styles.scss';
import ServicesAppointmentInfo from '../../components/services-appointment-info/services-appointment-info.component';
import ServicesDirectory from '../../components/services-directory/services-directory.component';
import ServicesContext from '../../contexts/services/services.context';

const HomePage = () => {
  const [data, setData] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  const servicesContext = useContext(ServicesContext);
  const { loading, services, getServices } = servicesContext;

  useEffect(() => {
    async function fetchData() {
      const response = await getHomepageCollection();
      setData(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    getServices();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* <h1>Love Your Body!</h1>
      <h1>Love Yourself!</h1> */}
      <div className="services-container">
        {services.map(service => (
          <ServicesDirectory
            key={service.id}
            title={service.title}
            imageUrl={service.imageUrl}
            description={service.description}
          />
        ))}
      </div>
      {data.map((info, idx) => {
        if (info.hide && currentUser) {
          return null;
        } else {
          return <InfoContainer key={idx} info={info} />;
        }
      })}
      <ServicesAppointmentInfo />
    </div>
  );
};

export default HomePage;
