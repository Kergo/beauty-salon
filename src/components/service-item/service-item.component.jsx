import React from 'react';
import './service-item.styles.scss';

const ServiceItem = ({ name, price }) => {
  return (
    <tr className='service-item'>
      <td className='service-item__name'>{name}</td>
      <td className='service-item__price'>€ {price}</td>
    </tr>
  );
};

export default ServiceItem;
