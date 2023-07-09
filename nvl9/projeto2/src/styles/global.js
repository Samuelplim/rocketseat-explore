import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body, button, a, textarea{
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button, a{
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
      filter: brightness(0.7);
    }
  }

  input {
    border: none;
    outline: none;
  }




`