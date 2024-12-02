import { createGlobalStyle } from 'styled-components'
import background from '../src/img/steam_bg.jpg'

export const colors = {}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
export default GlobalStyle
