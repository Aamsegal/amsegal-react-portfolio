import React, {Component} from 'react';

class ContactInfo extends Component {
    render() {
        const contactLink = this.props.contactLink;
        const contactType = this.props.contactType;
        const contactTypeImage = this.props.contactTypeImage;
        const contactTypeAltImage = this.props.contactTypeAltImage;
        return (
            <a href = {contactLink} target = '_blank'>
                <img src = {contactTypeImage} alt = {contactTypeAltImage}/>
            </a>
        )
    }
}

export default ContactInfo;