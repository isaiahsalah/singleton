import React from 'react'
import { SocialMediaBox } from './SocialMediatStyle'

interface Props {
    SocialMedia: any[];
}

const SocialMediaComponent = (props: Props) => {
    return (
        <SocialMediaBox>
            <div className='social-media'>
                <div className='line'></div>
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
        </SocialMediaBox>
    )
}

export default SocialMediaComponent