import { styled } from "styled-components"

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 0.8rem;
  padding: 0.5rem 1.6rem;

  color: ${({ theme }) => theme.COLORS.TEXT_TAG};
  text-align: center;
  font-size: 1.4rem;
`
