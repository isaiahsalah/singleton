import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const NavegatorBox = styled.nav`
  //font-family: "Abril Fatface";

  z-index: 2;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  left: 0;
  right: 0;
  top: 0px;
  background: linear-gradient(
    ${Color.background},
    ${Color.background}bf,
    ${Color.background}80,
    transparent
  );
  transition: top 0.25s ease-out;
  padding: 0 20px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .nav-bar {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    font-size: 0.9em;

    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 16px;

    //font-family: "Roboto Mono";
    //font-family: "Bebas Neue";
    //font-family: 'Courier New', Courier, monospace;
  }
  li {
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    display: inline-flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.active});
    }
  }

  .logo {
    display: flex;
    align-items: center;
    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.active});
    }
  }

  .title {
    transition: color 0.15s ease-in-out;
    margin: 0;
    color: ${Color.light};
    cursor: pointer;
    font-size: ${FontSize.littleSubTitle1};
  }
  .title:hover {
    color: ${Color.active};
  }
  .logo-img {
    display: none;
    filter: saturate(0);
  }
  .icon-li {
    cursor: pointer;
    display: flex;
    color: ${Color.primary};
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .country-label {
    font-weight: bold;
    transition: .25s;
    &:hover {
      .bolivia {
        display: none;
      }

      .paraguay {
        display: block;
      }
    }
  }

  .country{
  }
  .paraguay {
    display: none;
  }

  .B {
    color: red;
  }
  .O {
    color: yellow;
  }
  .L {
    color: green;
  }

  .P {
    color: red;
  }
  .A {
    color: white;
  }
  .R {
    color: blue;
  }
`;
