import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.LILAS};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;

  padding: 1.6rem;

  > svg {
    font-size: 2rem;
  }
`