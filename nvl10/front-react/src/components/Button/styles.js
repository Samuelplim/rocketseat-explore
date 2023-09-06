import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap:.8rem;

background-color: ${({ theme }) => theme.COLORS.PINK_100};
color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

width: 100%;
height: 4.8rem;
padding: 0 1.6rem;

font-weight: 400;

border-radius: 1rem;
border: 0;

> svg { 
 font-size: 2rem;
}

&:disabled{
  opacity: 0.5;
}
`