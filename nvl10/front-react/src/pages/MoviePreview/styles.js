import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;

overflow-y: auto;

::-webkit-scrollbar {
    width: .6rem;

  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    
    border-radius: .8rem;
    
  }

  ::-webkit-scrollbar-track{
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};

  }
`

export const Content = styled.div`
grid-area: content;

  width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 6.5rem;

  > .buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    button {
    display: flex;
    align-items: center;
    gap: .5rem;

    border: none;
    background: none;
    
    color: ${({ theme }) => theme.COLORS.PINK_100};

    svg {
      font-size: 2rem;
    }
    }
  }

   > h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-top: 6rem;
    margin-bottom: .20rem;

    color: ${({ theme }) => theme.COLORS.PINK_100};

   }

  > span {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 1.6rem;
  }

   p{
    margin: 2.5rem auto;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
   
   }

  > Section h2{
  margin-bottom: 1.6rem;

  }

 



` 