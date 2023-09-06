import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE}; 

  -webkit-font-smoothing:antialiased;
}

body,input,textarea,button{

  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  outline: none;
}

a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter .3s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

ul li {
  list-style: none
}




`