import React from 'react'
import './contact-details.styles.scss'

const ContactDetails = () => {
    return (
        <div className='contact-details-wrapper'>
            <i className="icon fas fa-map-marker-alt fa-2x"></i>
            <h3 className="contact-details__header">Contact Details</h3>
            <div className="contact-details__address">
                <p className="contact-details__address--country">The Ocean</p>
                <p className="contact-details__address--city">North Atlantic Ocean</p>
                <p className="contact-details__address--street">Deep Water</p>
                <p className="contact-details__address--post">SE1 D33P</p>
                <i className="icon fas fa-phone"></i>
                <a className="contact-details__address--phone link-cta" href='tel:0207 345 567'>0207 345 567</a>
            </div>
        </div>
    )
}

export default ContactDetails
