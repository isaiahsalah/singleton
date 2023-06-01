import React from 'react'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'

import { HomeBox } from './HomeStyle'
import PresentationSection from './presentation/PresentationSection'
import { PresentationItems, ProductsList, SocialMedia } from '../../utils/Config'
import ProductsSection from './products/ProductsSection'
import BackgroundImageComponent from '../../components/background/BackgroundImageComponent'
import ServicesSection from './services/ServicesSection'
import AboutSection from './about/AboutSection'
import BlogSection from './blog/BlogSection'
import ContactSection from './contact/ContactSection'
import ContactComponent from '../../components/contact/ContactComponent'
import FooterComponent from '../../components/footer/FooterComponent'



const HomePage = () => {
  return (
    <HomeBox>
      {/*<BackgroundImageComponent/>*/}
      <ContactComponent SocialMedia={SocialMedia}/>
      <NavegatorComponent />
      <PresentationSection />
      <ProductsSection />
      <ServicesSection/>
      <AboutSection/>
      <BlogSection/>
      <ContactSection/>
<FooterComponent/>
    </HomeBox>
  )
}

export default HomePage