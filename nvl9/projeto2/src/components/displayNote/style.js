import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-bottom: 2.4rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.6rem;
      font-weight: 500;
    }

    > ul {
      list-style: none;
      display: flex;
      gap: 1rem;

      > li {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LILAS};
        font-size: 2rem;
      }

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
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 4rem;

    > img {
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_050};
      width: 1.6rem;
      height: 1.6rem;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
      font-size: 1.6rem;
    }

    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LILAS};
    }
  }

  > div:nth-child(3) {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 4rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    font-size: 1.6rem;
  }
`
