import styled from "styled-components"

export const Container = styled.span`
 font-size: 1.2rem;
 font-weight: 400;
 text-align: center;

 margin-right: .8rem;
 padding: .5rem 1.6rem;

 border-radius: .8rem;
 background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
 color: ${({ theme }) => theme.COLORS.WHITE_TEXT} ;
`