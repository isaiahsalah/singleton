import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const SocialMediaBox = styled.nav`
   position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 3;
    width: 60px;

  .social-media {
    width: 100%;
    display: flex;
    //flex-wrap: wrap;
    justify-content: right;
    align-items: top;
    gap: 12px;

  }
  .icon {
    height: 1.2em;
    width: 100%;
    color: ${Color.light};
    transition: color 0.15s ease-in-out, transform 0.15s ease-in-out;
  
  }

  .icon:hover {
    color: ${Color.active};
    transform: scale(1.25);
  }

  .line {
    background-color: ${Color.light};
    border-radius: 5px;
    width: 2px;
    height: 250px;
  }
  
  ul {
    //width: 100%;
    list-style:none;
    margin: 10px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: top;
    gap: 18px;
    
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a{
    display: flex;
  }


`;
