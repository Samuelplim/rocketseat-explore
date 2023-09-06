import styled from "styled-components"


export const Container = styled.textarea`
width: 100%;
height: 27.4rem;

border: none;
border-radius: .8rem;
resize: none;

background-color: ${({ theme}) => theme.COLORS.BACKGROUND_100};
color: ${({ theme }) => theme.COLORS.WHITE};

margin-bottom:.10rem;
padding: 1.9rem 1.6rem;

&::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_800};
}

`