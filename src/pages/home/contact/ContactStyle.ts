import { Color } from "../../../utils/Config";
import styled from 'styled-components'

export const ContactBox = styled.div`
width: 100vw;
height: 100vh;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
.contact-section-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.contact-title {
    width: 40%;
    font-size:3em;
    font-family: 'Abril Fatface';

}
.contact-message {
    width: 40%;
    font-size: .8em;
}
.contact-button{
    margin: 15px 0px;
}
.contact-back{
    position: absolute;
    font-size: 8em;
    font-family: 'Abril Fatface';
    opacity: .1;
    right: 5%;
    bottom: 5%;

}
`