import { Color, FontSize } from "../../utils/Config";
import styled from 'styled-components'

export const SlideModernBox = styled.div`
overflow: hidden;
width: 100vw;
height: 100vh;

position: relative;
display: flex;
justify-content: center;
align-items: center;

.item-backimage{
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.2;
    filter: url(#blur);
  filter: blur(10px);
  filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
}

.slide-container{

display: flex;
justify-content: center;
//background-color: ${Color.active};
align-items: center;
position: relative;
width: 85vw;
height: 85vh;
}

.item-frontimage-container{
  position: absolute;

display: flex;
background-color: ${Color.active};

align-items: center;
width: 100%;
height: 100%;
translate: -100vw 0; 

    transition: opacity 1s 0.1s, translate 1s 0.1s;
    &.loaded {
      translate: 0 0; 
    opacity: 1;
  }
}
.item-image2-container{
  position: absolute;
top:50%;
left: 20vw;
display: flex;
background-color: ${Color.background};

align-items: center;
width: 25vw;
height: 25vh;
translate: -100vw 0; 

    transition: opacity 1s 0.3s, translate 1s 0.3s;
    &.loaded {
      translate: 0 0; 
    opacity: 1;
  }
}
.item-frontimage{
    opacity: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    object-fit: cover;
}

.item-image2{
    opacity: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    object-fit: cover;
    
}

.item-info{

    display: flex;
    flex-direction: column;
    position: absolute;
    width: auto;
    right: 10vw;
    top: 50%;
    text-align: right;
    color: ${Color.light};
    
}

.item-item{
  color: ${Color.active};
    font-size: ${FontSize.description2};
    opacity:0;    
    translate: 100vw 0; 
    transition: opacity .8s, translate .8s;
    &.loaded {
    translate: 0 0; 
    opacity: 1;
  }
}
.item-title{
    font-size: ${FontSize.bigTitle1};
    font-family: 'Merriweather';
    opacity:0;    
    translate: 100vw 0; 
    transition: opacity .8s 0.2s, translate .8s 0.2s;

    &.loaded {
    translate: 0 0; 
    opacity: 1;
  }

}
.item-title-variant{
  font-family: 'Bebas Neue';
  position: absolute;
  left: 7vw;
  top: 50%;
  transform: rotate(270deg);
  color: ${Color.primary};
    font-size: ${FontSize.extraBigTitle1};
    font-weight: bold;
    opacity:0;    
    filter: blur(10px);
    transition: opacity .8s 0.2s, filter .8s 0.2s;

    &.loaded {
      filter: blur(0px);
    opacity: 0.5;
  }

}
.item-description{
    font-size: ${FontSize.description2};
    color: ${Color.active};
    width: 50vw;
    opacity:0;    
    translate: 100vw 0; 
    transition: opacity .8s 0.4s, translate .8s 0.4s;
    &.loaded {
    translate: 0 0; 
    opacity: 1;
  }
}
.item-button{
  margin: 20px 0px;
    opacity:0;    
    translate: 100vw 0; 
    transition: opacity 1s 0.6s, translate 1s 0.6s;
    &.loaded {
    translate: 0 0; 
    opacity: 1;
  }
}

`