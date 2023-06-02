import React from 'react'
import { AboutBox } from './AboutStyle'
import {
    SiTypescript,
    SiJavascript,
    SiAngular,
    SiReact,
    SiAmazon,
    SiMicrosoft,
    SiPostgresql,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiNetapp,
    SiCsharp
} from "react-icons/si"

const Technologies = [
    {
        name: 'React',
        icon: <SiReact />
    },
    {
        name: 'Redux',
        icon: <SiAmazon />
    },
    {
        name: 'Redux',
        icon: <SiTypescript />
    },
    {
        name: 'Redux',
        icon: <SiAngular />
    },
    {
        name: 'Redux',
        icon: <SiMicrosoft />
    },
    {
        name: 'Redux',
        icon: <SiPostgresql />
    },
    {
        name: 'Redux',
        icon: <SiFirebase />
    },
    {
        name: 'Redux',
        icon: <SiMongodb />
    },
    {
        name: 'Redux',
        icon: <SiMysql />
    },
    {
        name: 'Redux',
        icon: <SiNetapp />
    },
    {
        name: 'Redux',
        icon: <SiJavascript />
    },
    {
        name: 'Redux',
        icon: <SiCsharp />
    }
]


const AboutSection = () => {
    return (
        <AboutBox>
            <div className='about-section'>
                <div className='section-title'>
                    Uno poco sobre nosotros
                </div>
                <div className='about-contend'>
                    <div className='text'>
                        <div className='text-experience'>
                            <div className='experience-year'>
                                17
                            </div>
                            <div className='experience-about'>
                                años dando soluciones tecnologicas a pequeñas y grandes empresas
                            </div>
                        </div>
                        <div className='text-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <button>
                            Ver más
                        </button>
                    </div>
                    <div className='line-container'>
                    <div className='line'></div>
                    </div>
                    <div className='technologies-container'>
                        <div className='technologies-title'>
                            Tecnologias con las que trabajamos
                        </div>

                        <div className='technologies'>
                            {Technologies.map((item, index) => {
                                return (
                                    <div className='technologies-item' key={index}>
                                        <div className='technologies-icon'>
                                            {item.icon}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>



        </AboutBox>
    )
}

export default AboutSection