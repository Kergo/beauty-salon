import React from 'react'
import ServiceItem from '../service-item/service-item.component';

const ServiceType = ({title, details}) => {
    console.log(details);
    
    return (
        <div>
            <h2>{title}</h2>
            {details.map(item => (
                <ServiceItem key={item.name} name={item.name} price={item.price} />
            ))}
        </div>
    )
}

export default ServiceType
