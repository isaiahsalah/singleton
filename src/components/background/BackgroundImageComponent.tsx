import React from 'react'
import img3 from '../../assets/images/imagen3.jpg'
import { BackgroundBox } from './BackgroundImageStyle'

const BackgroundImageComponent = () => {
    return (
        <BackgroundBox>
            <img className='background-image' src={img3} />

        </BackgroundBox>
    )
}

export default BackgroundImageComponent