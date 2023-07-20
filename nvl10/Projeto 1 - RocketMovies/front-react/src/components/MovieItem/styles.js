import styled from "styled-components"

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_100};
color: ${({ theme }) => theme.COLORS.GRAY_800};

border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_800}` : "none" };

border-radius: 1rem;
padding-right: 1rem;

> button {
  border: none;
  background: none;
}

> input {
  height: 5.6rem;
  width: 100%;

  padding: 1.2rem; 

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
  
}



`