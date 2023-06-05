import React from 'react'
import { TeamSectionBox } from './TeamSectionStyle'
import { TeamList } from '../../../utils/Config'

const TeamSection = () => {
    return (
        <TeamSectionBox>
            <h1 className='title-section-back'>Equipo</h1>
            <div className='title-section-container'>
                <div className='line-horizontal-short' />
                <h5 className='section-title abril'>
                    Nuestro Equipo
                </h5>
                <div className='line-horizontal-long' />
            </div>
            <div className='team-container'>
                <div className='team-title'>
                    Nuestro equipo de trabajo
                </div>

                <div className='team'>
                    {TeamList.map((item, index) => {
                        return (
                            <div className='team-item' key={index}>
                                <img src={item.Image} className='team-image' />
                                <div className='team-text'>
                                    <div className='team-position'>
                                        {item.Position}
                                    </div>
                                    <div className='team-name'>
                                        {item.Name}
                                    </div>
                                    <div className='comilla'>"</div>
                                    <div className='team-description'>
                                        {item.Description}
                                    </div>
                                    <div className='team-social'>
                                        {item.SocialMedia.map((item, index) =>

                                            <div className='team-social-item' key={index}>
                                                <item.Icon />
                                            </div>)}
                                    </div>
                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        </TeamSectionBox>
    )
}

export default TeamSection