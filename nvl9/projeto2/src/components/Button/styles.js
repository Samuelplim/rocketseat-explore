import styled from "styled-components";

export const Container = styled.button`
 width: 100%;
 background-color: ${({theme}) => theme.COLORS.ROSE};
 color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
 height: 56px;
 border: 0;
 padding: 0 16px;
 margin-top: 16px;
 border-radius: 10px;
 font-weight: 500;

 &:disabled{
    opacity: 0.5;
 }
`;
export const Title = styled.h1`
font-weight: 700;
font-size: 3rem;
color: ${({ theme }) => theme.COLORS.ROSE};
`;
export const SubTitle = styled.h2`
font-weight: 500;
font-size: 0.8rem;
color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
export const TitleLogin = styled.p`
font-weight: 500;
font-size: 1.5rem;
color: ${({ theme }) => theme.COLORS.GRAY_100};
`