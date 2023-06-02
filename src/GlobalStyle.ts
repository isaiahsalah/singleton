import { Color, FontSize } from "./utils/Config";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {

  font-family:Rubik;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: ${Color.light};
  background-color: ${Color.background};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  overflow-x: hidden;
}
body::-webkit-scrollbar{
        width: 0px;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 0px;
        
    }

a {
  color: #8491A0;
  text-decoration: inherit;
}
a:hover {
  color: ${Color.active};
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${Color.light};
  color: ${Color.background};

  cursor: pointer;
  transition: 0.25s;
}
button:hover {
  background-color: ${Color.active};
  color: ${Color.background};

  border-color: ${Color.active};
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
/*
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #475A71;
  }
  button {
    background-color: #f9f9f9;
  }
}*/


`