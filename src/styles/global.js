import { createGlobalStyle } from 'styled-components'

import 'font-awesome/css/font-awesome.css'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
   
  html, body, #root {
    height: 100%;
    width: 100%;
    justify-content: center;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

`;