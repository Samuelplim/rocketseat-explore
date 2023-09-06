import styled from "styled-components"

import backgroundImg from "../../assets/something-magical.png"

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 13.6rem;

  > h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > p{
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE_P};
  }

  > h2{
    font-size: 2.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};

    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }

  > div {
    width: 100%;
  }

  button{
    margin-top: 2rem;
  }
  
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;

    margin-top: 4.2rem;

    color: ${({ theme }) => theme.COLORS.PINK_100};

    svg {
      font-size: 2rem;
    }
  }


`

export const Background = styled.div`
flex: 1;
background:url(${backgroundImg}) no-repeat center center;
background-size: cover;

opacity: 0.4;
`