'use client'
import { createGlobalStyle } from 'styled-components'

  
  export const GlobalStyles = createGlobalStyle`
    
    @font-face {
      font-family:'roboto' ;
      src: url();
    }


    body {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.textColor};
    }
  `;

