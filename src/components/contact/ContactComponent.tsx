import React from 'react'
import { ContactBox } from './ContactStyle'

interface Props {
    SocialMedia: any[];
}

const ContactComponent = (props: Props) => {
    return (
        <ContactBox>

            <div className='contact'>
                <div className='line'></div>
                <a className='contact-text' href="./" target='_blanck'>
                    Contacta con ventas
                </a>
                <div className='line'></div>
            </div>
        </ContactBox>
    )
}

export default ContactComponent