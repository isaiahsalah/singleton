import React from 'react'
import { ProductBox } from './ProductsStyle';
import SlideComponent from '../../../components/slide/SlideComponent';
import { ProductsList } from '../../../utils/Config';

const ProductsSection = () => {
  return (
    <ProductBox>
      <div className='section-title'>
        Nuestros Productos
      </div>
      <div className='product-list'>
        {ProductsList.map((item, index) => (
          <div className='product-item' key={index}>
            <div className='product-image-container'>
              <img className='product-image' src={item.image} alt={item.title} />
            </div>
            <div className='product-info'>
              <div className='product-class'>{item.item}</div>
              <div className='product-title'>{item.title}</div>
              <div className='product-description'>{item.description}</div>
              
              <div className='product-button-container' >
                <button className='product-button'>Ver más</button>
              </div>
            </div>
            <div className='product-module-list'>
                {item.modules.map((module, index) => {
                  return <div
                    style={{ backgroundColor: module.color }}
                    className='product-module'
                    key={index}>{module.title}</div>
                })}
              </div>
          </div>
        ))}
      </div>






    </ProductBox>
  )
}

export default ProductsSection