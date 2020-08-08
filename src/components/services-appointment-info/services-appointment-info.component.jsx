import React from 'react';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import './services-appointment-info.styles.scss';

const ServicesAppointmentInfo = () => {
  let history = useHistory();

  return (
    <div className="services__appointment-container">
      <h1>Beauty in sync with the pulse of time</h1>
      <h4>
        Dermatology, shaping, machine-assisted procedures, lasers and much more
      </h4>
      <div className="services__appointment--text">
        <h4>The Home Of Beauty</h4>
        <p>
          The Ugly Duckling realised its concept titled “Beauty in sync with the
          pulse of time” by offering a wide range of exclusive and specialised
          services guaranteed to be provided by a team of experts using
          professional equipment in a stylish setting with a pinch of relaxing
          luxury.
        </p>
      </div>
      <CustomButton onClick={() => history.push('/appointment')}>
        make an appointment
      </CustomButton>
    </div>
  );
};

export default ServicesAppointmentInfo;
