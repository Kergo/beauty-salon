import React from 'react';
import MapContainer from '../../components/map/map.component';

import './contacts.styles.scss';

const ContactsPage = () => {
  return (
    <div>
      <div className="map-container">
        <MapContainer />
        {/* google-map-reactgoogle-map-react
        <a
          href="https://maps.google.com?saddr=Current+Location&amp;daddr=51.5046976,-0.0870973"
          className="directions link-cta"
          target="_blank"
        >
          get directions
        </a> */}
      </div>
    </div>
  );
};

export default ContactsPage;
