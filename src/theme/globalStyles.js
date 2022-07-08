import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    height: 100%;
  }

  body {
    font-size: 16px;
    font-family: ${props => props.theme.textFont}, sans-serif;
    color: ${props => props.theme.black};
    display: flex;
    flex-wrap: wrap;
    background: ${props => props.theme.white};
    max-width: 100%;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  header {
    flex: 0 0 auto;
  }

  main {
    flex: 1 0 auto;
  }

  footer {
    flex: 0 0 auto;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    font-style: normal;
  }

  fieldset {
    border: none;
  }
  

  @media(min-width:1200px) {
    /* height: 58px; */
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  img {
    border-style: none;
    display: block;
    line-height:0
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [hidden] {
    display: none;
  }

  svg {
    height: auto;
  }

  .menuActive {
    color: ${props => props.theme.primary} !important;
  }
`

export default GlobalStyles
