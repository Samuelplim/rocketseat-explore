import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 11.6rem 8.5rem auto;
  grid-template-areas:
    "header"
    "return"
    "content";

  overflow-y: hidden;

  > div:nth-child(2) {
    grid-area: return;

    width: 100%;
    padding: 4rem 0 2.4rem 12.3rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      width: 7rem;

      > svg {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LILAS};
      }

      > p {
        color: ${({ theme }) => theme.COLORS.LILAS};
        font-size: 1.6rem;
      }
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 0 10.6rem 15.6rem 12.3rem;

  > div {
    width: 100%;
    height: 60vh;

    overflow-y: auto;
    padding-right: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.LILAS};
    }

    > div:nth-child(3) {
      display: flex;
      gap: 4rem;

      > button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.LILAS};
      }

      margin-bottom: 1rem;
    }
  }
`

export const Form = styled.form`
  margin-bottom: 4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    font-weight: 500;
    padding: 1.5rem 0 2.5rem 0;
  }

  > div {
    display: flex;
    gap: 2.5rem;
    padding-bottom: 2.5rem;
  }

  > textarea {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

    border-radius: 1rem;
    padding: 1.6rem;

    width: 100%;
    height: 25rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    border: 0;
    outline: none;
    resize: none;

    cursor: pointer;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`

export const Markers = styled.div`
  > h3 {
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2.4rem;
  }

  > div {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 21rem);
    gap: 2.4rem;
    margin-bottom: 4rem;
    padding: 1.6rem;
    width: 100%;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK};

  }
`