import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;

  border: ${({ theme, $isNew }) =>
    $isNew ? `0.2rem dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 1rem;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? theme.COLORS.BLACK : theme.COLORS.BACKGROUND_200};

  filter: brightness(1);
  transition: filter 0.45s;

  &:hover {
    filter: ${({ $isNew }) => ($isNew ? " brightness(0.85)" : "none")};
  }

  > input {
    width: 100%;
    height: 100%;

    border: none;
    background: none;
    outline: none;

    cursor: ${({ $isNew }) => ($isNew ? "text" : " default")};

    padding: 2rem;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > button {
    color: ${({theme}) => theme.COLORS.LILAS};
    font-size: 2.4rem;
    border: none;
    background: none;
    padding-right: 2rem;
    padding-top: 0.8rem;
  }
`
