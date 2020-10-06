import React, {Component} from 'react';
import './ContactInfo.css'

class ContactInfo extends Component {
    render() {
        const contactLink = this.props.contactLink;
        const contactType = this.props.contactType;
        const contactTypeImage = this.props.contactTypeImage;
        const contactTypeAltImage = this.props.contactTypeAltImage;
        return (
            <a href={contactLink} target = '_blank'  rel="noopener noreferrer" className="contact_Link">
                <img src = {contactTypeImage} alt = {contactTypeAltImage} className="contact_Link_Image"/>
            </a>
        )
    }
}

export default ContactInfo;