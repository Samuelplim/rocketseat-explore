import styled  from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECTION};

border: none;
border-radius: 1rem;

padding: 2.2rem;
margin-bottom: 1.6rem;

> h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 3.4rem;
  color: ${({ theme }) => theme.COLORS.PINK_100};
}

> p {
 flex: 1;
 text-align:left;
 font-weight: 600;
 font-size: 1.6rem;

 margin-top: 1rem;
 
 color: ${({ theme }) => theme.COLORS.PINK_100};
}

> footer{
  width: 100%;
  display: flex;
  margin-top: 2.4rem;
}
`