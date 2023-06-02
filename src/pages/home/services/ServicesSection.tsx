import React from 'react'
import { ServicesBox } from './ServicesStyle'
import SlideDinamicComponent from '../../../components/slideDinamic/SlideDinamicComponent'
import { ServicesList } from '../../../utils/Config'

const ServicesSection = () => {
  return (
    <ServicesBox>
        <div className='products-section-title'>
        Nuestros Productos
      </div>
      < SlideDinamicComponent items={ServicesList}/>
    </ServicesBox>
  )
}

export default ServicesSection