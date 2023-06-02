import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const BannerBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

  .background-image-container {
    position: relative;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;
    background-color: ${Color.background};
  }

  .background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

    opacity: .5;
  }

  .slide-container {
    display: flex;
    justify-content: center;
    //background-color: ${Color.background};
    align-items: center;
    width: 85vw;
    height: 85vh;
  }

  .item-backimage-container {
    position: absolute;
    top: 20%;
    left: 10vw;
    display: flex;
    background-color: ${Color.background};

    align-items: center;
    width: 60vh;
    height: 60vh;
    translate: -100vw 0;

    transition: opacity 1s 0.1s, translate 1s 0.1s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-logo-container {
    position: absolute;
    top: 50%;
    left: 20vw;
    display: flex;
    background-color: ${Color.background};

    align-items: center;
    width: 40vh;
    height: 40vh;
    translate: -100vw 0;
    cursor: pointer;
    transition: opacity 1s 0.3s, translate 1s 0.3s, transform 0.5s, filter 0.5s;
    filter: saturate(0);
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
    &:hover {
      filter: saturate(1);
      transform: scale(1.1);
    }
  }
  .item-backimage {
    height: 100%;
    width: 100%;
    opacity: 1;
    object-fit: cover;
  }

  .item-logo {
    height: 100%;
    width: 100%;
    opacity: 1;
    object-fit: cover;
    background-color: ${Color.background};
  }

  .item-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: auto;
    right: 10vw;
    top: 50%;
    text-align: right;
    color: ${Color.light};
  }

  .item-item {
    color: ${Color.light};
    font-size: ${FontSize.description2};
    opacity: 0;
    translate: 100vw 0;
    transition: opacity 0.8s, translate 0.8s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-title {
    font-size: ${FontSize.bigTitle1};
    //font-family: "Merriweather";
    font-family: "Abril Fatface", sans-serif;

    opacity: 0;
    translate: 100vw 0;
    transition: opacity 0.8s 0.2s, translate 0.8s 0.2s;

    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-title-variant {
    font-family: "Bebas Neue";
    position: absolute;
    left: 7vw;
    top: 50%;
    transform: rotate(270deg);
    color: ${Color.primary};
    font-size: ${FontSize.extraBigTitle1};
    font-weight: bold;
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.8s 0.2s, filter 0.8s 0.2s;

    &.loaded {
      filter: blur(0px);
      opacity: 0.5;
    }
  }
  .item-description {
    font-size: ${FontSize.description2};
    color: ${Color.light};
    width: 50vw;
    opacity: 0;
    translate: 100vw 0;
    transition: opacity 0.8s 0.4s, translate 0.8s 0.4s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-button {
    margin: 20px 0px;
    opacity: 0;
    translate: 100vw 0;
    transition: opacity 1s 0.6s, translate 1s 0.6s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
`;
