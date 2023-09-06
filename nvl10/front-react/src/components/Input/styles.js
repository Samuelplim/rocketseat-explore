import styled from "styled-components"

export const Container = styled.div`
  width: 50%;

  display: flex;
  align-items: center;

  margin-bottom: .8rem;
  

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.9rem 2.4rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE} ;

    border: 0;

    &:placeholder{
      color:  ${({ theme }) => theme.COLORS.GRAY_800};
    }

    
  }

  > svg {
    margin-left: 1.6rem;
  }
`
