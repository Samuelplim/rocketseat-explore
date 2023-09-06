import styled from "styled-components"
import { Link } from "react-router-dom"


export const Header = styled.header`
grid-area: header;

width: 100%;
height: 11.6rem;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_BORDER};

display: flex;
align-items: center;
justify-content: space-between;
gap: 6.4rem;

padding: 2.4rem 12.3rem;

.profile-wrapper{
display: flex;
flex-direction: column;
}
`

export const Brand = styled.div`
font-weight: 700;

color: ${({ theme }) => theme.COLORS.PINK};;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  gap: 1rem;

  strong {
  font-size: 1.4rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  }

> img {
  width: 6.4rem;
  height: 6.4rem;

  border-radius: 50%;
}
`
export const Logout = styled.button`
position: relative;

top: -1rem;
left: -3.5rem;

border: none;
background: none;

font-size: 1.4rem;
font-weight: 400;

color: ${({ theme }) => theme.COLORS.GRAY_800};
  
`