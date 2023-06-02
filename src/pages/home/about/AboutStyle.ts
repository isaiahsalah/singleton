import { Color, FontSize } from "../../../utils/Config";
import styled from 'styled-components'

export const AboutBox = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
text-align: center;
align-content: center;
justify-content: center;

.about-section{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
}
.about-contend{
    display: flex;
    align-items: center;
    justify-content: center;
}
.title-section{
    width: 100%;
    padding: 20px 0;
}
.line-container{
    display: flex;
    justify-content: center;
    height:100%;
    width: 10%;
}
.line{
    height:100%;
    width: 3px;
    background-color: ${Color.light};
    border-radius: 4px;
    
}

.text{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.technologies-container{
    width: 30%;
    gap: 20PX;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.text-experience{
    width: 100%; 
    display: flex;
    align-items: center;
    gap: 20px;

}
.experience-year{
    width: 50%;
    font-family: 'Abril Fatface', sans-serif;
    font-size: 10em;
    text-align: right;
    margin:0;
    padding:0;

    
}
.experience-about{
    width: 50%;
    font-family: "Bebas Neue";
    font-size: 1.5em;
    text-align: left;
    //padding: 50px 0;
    line-height:1em
}
.text-description{
    font-size: .85em;

}


.technologies-title{
    width: 100%;
    font-size: .85em;
}
.technologies-icon{
    
    display: flex;
    font-size: 3.5em;
}
.technologies-name{
    font-size: .85em;
}
.technologies-item{
    display: flex;
    align-items: center;
    justify-content: center;
}
.technologies{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

`