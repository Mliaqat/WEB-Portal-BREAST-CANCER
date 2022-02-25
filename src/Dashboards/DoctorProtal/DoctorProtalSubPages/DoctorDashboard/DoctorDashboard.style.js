import styled from "styled-components";
import { CommonButton } from "../../../../style/commomStyle";

export const DoctorDashboardStyle = styled.main`
  width: 95%;
  margin: auto;

  .file {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: end;
    input {
      border: 0.1rem solid;
      padding: 0.3rem;
      font-size: 2rem;
    }
    input[type="file"]::file-selector-button {
      ${CommonButton}
      border-radius: 0.5rem;
      padding: 0.3rem;
    }
    .btn {
      ${CommonButton}
      border-radius: 0.5rem;
      padding: 0.8rem 1rem;
    }
  }

  .viewresult {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    row-gap: 2rem;
    .preview-image {
      width: 12rem;
      height: 12rem;
    }

    .btn {
      ${CommonButton}
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      border-radius: 0.5rem;
    }
  }

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
`;