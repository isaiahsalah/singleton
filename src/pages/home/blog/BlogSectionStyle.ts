import { Color, FontSize } from "../../../utils/Config";
import styled from "styled-components";

export const BlogSectionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  width: 100vw;
  

  .icon-navigate {
    font-size: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    transition: 0.25s;
    &:hover {
      transform: scale(1.2);}
  }

  .blogs-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    width: 70%;
    max-width: 1000px;
  }



  .blog-item {
    //overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    grid-column: 1fr;
    position: relative;
    height: 70vh;

    gap: 20px;
  }
  .blog-title {
    width: 50%;
    text-align: center;
    font-weight: bold;

  }

  .blog-button-container {
    width: 50%;
    display: flex;
  }

  .blog-item-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    order: 3;
    bottom: 50px;
  }

  .blog-item-text-bottom {
    order: 3;
  }

  .blog-item-text-top {
    order: 1;
  }

  .blog-image-container {
    font-size: .85em;
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    order: 2;
    z-index: -1;
    width: 100%;
    height: 80%;
    background-color: ${Color.background};

  }

  .blog-image {
    position: absolute;
    top: 0;
    object-fit: cover;
    opacity: 0.2;
    width: 100%;
    height: 100%;
  }


  .title-section{
    width: 100%;
  text-align: center;
  font-size: 3em;
  padding: 1em;
  font-family: "Abril Fatface", sans-serif;

}
`;
