import React from 'react'
import { ContactBox } from './ContactStyle'

interface Props {
    SocialMedia: any[];
}

const ContactComponent = (props: Props) => {
    return (
        <ContactBox>
            <div className='social-media'>
                <div className='social-media-box'>

                    <ul>
                        {props.SocialMedia.map((social, i) =>
                            <li key={i} title={social.title}>
                                <a href={social.link} target='_blanck'>
                                    <social.icon className='icon' />
                                </a>
                            </li>)}
                    </ul>
                    <div className='line'></div>
                </div>
            </div>
        </ContactBox>
    )
}

export default ContactComponent