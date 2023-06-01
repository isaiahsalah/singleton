import React from 'react'
import { ProductBox } from './ProductsStyle';
import SlideComponent from '../../../components/slide/SlideComponent';
import { ProductsList } from '../../../utils/Config';

const ProductsSection = () => {
  return (
    <ProductBox>
      <div className='products-section-title'>
        Nuestros Productos
      </div>
      < SlideComponent items={ProductsList}/>
      
    </ProductBox>
  )
}

export default ProductsSection