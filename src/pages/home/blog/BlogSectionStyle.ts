import { Color } from "../../../utils/Config";
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
      transform: scale(1.2);
    }
  }

  .blogs-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 70%;
    max-width: 1000px;
  }

  .blog-list{
    display: flex;
  }

  .blog-item {
    //overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    grid-column: 1fr;
    position: relative;

    gap: 20px;
  }
  .blog-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    font-family: "Abril Fatface";
  }

  .blog-button-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blog-item-text {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
    font-size: 0.85em;
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    order: 2;
    z-index: -1;
    width: 100%;
    aspect-ratio: 3/1;
    background-color: ${Color.secondary};
  }

  .blog-image {
    position: absolute;
    top: 0;
    object-fit: cover;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    //border-radius: 5px;
  }
  .blog-content {
    font-size: 0.75em;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* ajusta el número de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .section-title-text {
    text-align: left;
    font-size: 4em;
  }

  .line-horizontal {
    height: 2px;
    width: 100vw;
    max-width: 1000px;
    border-radius: 5px;
    background-color: ${Color.alternative};
  }
  

  .section-title-description {
    width: 60%;
    font-size: 0.85em;
    text-align: left;
  }
`;
