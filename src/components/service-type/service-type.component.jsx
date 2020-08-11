import React from 'react';
import ServiceItem from '../service-item/service-item.component';
import './service-type.styles.scss';

const ServiceType = ({ title, details }) => {
  // console.log(details);

  return (
    <div className='service-type'>
      <h2 className='service-type__title'>{title}</h2>
      <table className='service-type__table'>
        <tbody>
          {details.map(item => (
            <ServiceItem key={item.name} name={item.name} price={item.price} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceType;
