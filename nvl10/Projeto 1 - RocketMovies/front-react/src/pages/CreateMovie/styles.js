import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;

overflow-y: auto;

::-webkit-scrollbar {
  width: .6rem;
}

::-webkit-scrollbar-thumb{
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  
  border-radius: 1rem;
}

::-webkit-scrollbar-track{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

.tags {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 1.6rem;
  margin-top:.8rem;

  border-radius: .8rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
}

  
`

export const Form = styled.form`
 max-width: 113rem;
 margin: 3.5rem auto;

 > header {
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: 2.4rem;

 margin-bottom:  3.6rem;

 > button {
    display: flex;
    gap: .2rem;

    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK_100};

    svg {
      font-size: 2rem;
    }
  }

  h2{
    font-size: 3.6rem;
    font-weight: 500;
  }
 }

 > .inputs {
  display: flex;
  align-items: center;
  gap: 4rem;

  margin-bottom: 4rem;

  > input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button{
    visibility: hidden;
  }
}

 
 > section h2 {
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
 }

 
 > button {
  margin: 0 auto;
  width: 25%;
 }

 
`