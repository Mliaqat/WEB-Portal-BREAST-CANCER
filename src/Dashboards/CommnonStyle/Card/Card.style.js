import styled from "styled-components";

export const VerticalCardStyle = styled.figure`
  margin-bottom: 2rem;
  border-radius: 10px;
  background: linear-gradient(145deg, #c3c3cb, #e8e8f2);
  box-shadow: 13px 13px 40px #bfbfc7, -13px -13px 40px #f3f3fd;

  .thumbnail-wrapper {
    width: 10rem;
    border-radius: 50%;
    overflow: hidden;
    /* border: 0.2rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR}; */
    z-index: 2;
  }

  .card-icon {
    > svg {
      width: 4.5rem;
      fill: ${(p) => p.theme.colors.BRICK_RED};
    }
  }

  .user-details {
    /* background: ${({ theme }) => theme.colors.DULL_GRAY_COLOR}; */
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    padding: 2rem 2rem;
    padding-left: 5rem;
    border-radius: 1rem;

    .user-image {
      max-width: 100%;
      border-radius: 50%;
      img {
        width: 5rem;
      }
    }

    .heading {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.BLACK_COLOR};
    }

    .sub-heading {
      width: 7rem;
    }
  }
`;
