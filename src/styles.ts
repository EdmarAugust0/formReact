import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  gray: '#eee'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .containerForm {
    max-width: 256px;
    width: 100%;
    margin: 32px auto 0 auto;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${colors.gray};
  }
`
