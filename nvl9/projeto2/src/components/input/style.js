import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: 1rem;

  > svg {
    margin: 1.8rem 0 1.8rem 1.6rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > input {
    width: 100%;
    height: 100%;
    background: transparent;
    padding: 1.8rem 1.6rem 1.88rem 1.6rem;

    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`