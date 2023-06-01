import React from 'react'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'

import { HomeBox } from './HomeStyle'
import PresentationSection from './presentation/PresentationSection'
import { PresentationItems, ProductsList } from '../../utils/Config'
import ProductsSection from './products/ProductsSection'



const HomePage = () => {
  return (
    <HomeBox>
      <NavegatorComponent />
      <PresentationSection />
      {/*<ProductsSection />*/}
    </HomeBox>
  )
}

export default HomePage