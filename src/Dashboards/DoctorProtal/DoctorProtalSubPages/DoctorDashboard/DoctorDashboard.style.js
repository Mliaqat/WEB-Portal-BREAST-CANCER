import styled from "styled-components";
import { CommonButton } from "../../../../style/commomStyle";

export const DoctorDashboardStyle = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  align-items: center;
  row-gap: 2rem;
  margin: auto;
  margin-top: 3rem;
  .product-image-wrapper {
    display: flex;

    height: 30rem;
    width: 30rem;
    background: ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
    border-radius: 1rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    .preview-image {
      width: 100%;
      height: 100%;
      display: inline-block;
      border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
    }

    .icon {
      img {
        width: 5rem;
      }
    }
  }
  .btn {
    ${CommonButton}
    border-radius: 2rem;
  }
`;
