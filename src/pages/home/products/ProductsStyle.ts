import { Color, FontSize } from "../../../utils/Config";
import styled from 'styled-components'

export const ProductBox = styled.div`
   height: 100vh;
   width: 100vw;
   display: grid;
   align-items: center;

   .products-section-title{
    font-size: ${FontSize.bigSubTitle3};
   }

`