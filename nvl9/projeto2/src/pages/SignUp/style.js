import { styled } from "styled-components"
import background from "../../../assets/background.png"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  > main {
    margin: 0 16.3rem 0 13.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LILAS};
      font-size: 4.8rem;
      font-weight: 700;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
      width: 100%;
      text-align: start;
      margin-bottom: 4.8rem;
    }

    > a {

      display: flex;
      align-items: center;
      gap: 0.8rem;

      margin-top: 4.2rem;
      color: ${({ theme }) => theme.COLORS.LILAS};
      font-size: 1.6rem;

      > svg{
        font-size: 2.4rem;
      }
    }
    
  }
`

export const Form = styled.form`
  width: 100%;

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  > div {
    margin-bottom: 0.8rem;
  }

  > :nth-child(4) {
    margin-bottom: 0;
  }

  > button {
    margin-top: 2.4rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`
