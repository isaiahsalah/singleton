import { Color, FontSize } from "../../utils/Config";
import styled from 'styled-components'

export const BackgroundBox = styled.div`
z-index: -1;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
opacity: .5;
.background-image{
    object-fit: cover;

    width:100%;
    height:100%;
}


`