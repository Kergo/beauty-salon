import React from 'react';
import MapContainer from '../../components/map/map.component';
import ContactDetails from '../../components/contact-details/contact-details.component';
import OpeningTime from '../../components/opening-time/opening-time.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import './contacts.styles.scss';

const ContactsPage = () => {
  return (
    <div className="contacts-page-wrapper">
      <h1 className="title">Contacts</h1>
      <div className="contact-details-container">
        <div className="map-container">
          <h2>Where to find us</h2>
          <MapContainer />
          <a
            href="https://maps.google.com?saddr=Current+Location&amp;daddr=51.5046976,-0.0870973"
            className="directions link-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            get directions
          </a>
        </div>
        {/* <OpeningTime /> */}
        <ContactDetails />
      </div>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactsPage;
