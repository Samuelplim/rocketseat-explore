import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  padding: 3.2rem;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.NOTE};
  border-radius: 1.6rem;

  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 700;
  }

  > ul {
    list-style: none;
    display: flex;

    color: ${({ theme }) => theme.COLORS.LILAS};
    font-size: 1.6rem;

    .star-on {
      svg {
        fill: ${({ theme }) => theme.COLORS.LILAS};
      }
    }

    .star-off {
      svg {
        color: ${({ theme }) => theme.COLORS.LILAS};
      }
    }
  }

  > p {
    height: 4.5rem;
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.TEXT};
    text-overflow: ellipsis;
    font-size: 1.6rem;
    text-align: justify;
    margin: 1.5rem 0;
  }

  > div {
    display: flex;
    gap: 0.8rem;
  }
`