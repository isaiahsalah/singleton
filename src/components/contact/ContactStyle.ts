import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const ContactBox = styled.nav`
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 3;
  width: 60px;
  z-index: 5;
  a {
    writing-mode: vertical-rl;
    text-align: right;
  }

  .contact {
    width: 100%;
    display: flex;

    //flex-wrap: wrap;
    justify-content: center;
    align-items: top;
    gap: 8px;
  }

  .line {
    background-color: ${Color.light};
    border-radius: 5px;
    width: 2px;
    height: 250px;
  }

  .contact-text {
    margin: 0 0 10px 0;
    font-size: 0.85em;
    transition: 0.25s;
  }

  .contact-text:hover {
    transform: scale(1.1)
  }
`;
