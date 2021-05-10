import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: inherit;
  }
  @font-face {
    font-family: "Futura";
    src: url(/fonts/futura/FuturaHeavyfont.ttf);
  }  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: "Futura";

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
