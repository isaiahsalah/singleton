import { Color, FontSize } from "../../../utils/Config";
import styled from 'styled-components'

export const ProductBox = styled.div`
   min-height: 100vh;
   width: 100vw;
   display: grid;
   align-items: center;
   justify-content: center;
   .product-list{
      width: 100%;
      display: grid;
      
      max-width: 1000px;
   }
   .product-item{
      display: flex;
      flex-wrap: wrap;
      width:100%;
   }
   .product-image-container{
      width: 50%;
   }
   .product-image{
      display: flex;
      object-fit: cover;
      width: 100%;
      aspect-ratio: 4/2;
   }
   .product-info{
      display: flex;
      flex-wrap: wrap;
      justify-content:right;
      text-align: right;
      width: 50%;
   }
   .product-title{
      width: 100%;
      font-size:  3em;
      font-family: "Abril Fatface";
   }
   .product-description{

      width: 100%;
      font-size: 0.85em;
   }
   .product-module-list{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 8px;
      padding:8px 0;
   }
   .product-module{
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 5/4;
      
   }
   .product-module:hover{
      
   }

`