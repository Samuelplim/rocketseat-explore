import styled from "styled-components"

export const Container  = styled.div`
width: 100%;

> header {
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECTION};

  display: flex;
  align-items: center;

  padding: 0 12.4rem;

  button {
    color: ${({ theme }) => theme.COLORS.PINK_100};

    border: none;
    background: none;


    svg {
    font-size: 2.4rem;
  }
  }
 
}
`
export const Form  = styled.form`
max-width: 34rem;
margin: 3rem auto 0;

 > .inputs div {
  width: 100%;
 }

 > .inputs div:nth-child(3) {
  margin-top: 2.4rem;
}

> button {
  margin-top: 3rem;
}
`

export const Avatar = styled.div`
position: relative;
margin: -12.4rem auto 3.2rem;

width: 18.6rem;
height: 18.6rem;

> img {
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
}

> label {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: .7rem;
  right: .7rem;

  cursor: pointer;

  input {
  display: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color:${({ theme }) => theme.COLORS.BACKGROUND_TAG} ;
  }
}


`


