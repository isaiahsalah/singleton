import React from 'react'
import { ContactBox } from './ContactStyle'
import { ContactMessage } from '../../../utils/Config'

const ContactSection = () => {
    return (
        <ContactBox>
            <div className='contact-back'>Contactanos</div>
            <div className='contact-title'>{ContactMessage.title}</div>
            <div className='contact-message'>
                {ContactMessage.message}            </div>
            <button className='contact-button'>Dí Hola</button>
        </ContactBox>
    )
}

export default ContactSection