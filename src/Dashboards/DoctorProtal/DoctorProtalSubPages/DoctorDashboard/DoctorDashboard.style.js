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
    flex-wrap: wrap;
    row-gap: 1rem;
    input {
      border: 0.1rem solid;
      padding: 0.3rem;
      font-size: 2rem;
    }
    input[type="file"]::file-selector-button {
      ${CommonButton}
      border-radius: 0.5rem;
      padding: 0.3rem;
      @media (max-width: 580px) {
        font-size: 1rem;
      }
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
    grid-template-columns: 1fr 1fr;
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
      overflow: hidden;
      display: inline-block;
      border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
    }

    .icon {
      img {
        width: 5rem;
      }
    }
  }

  .modelbody {
    background-color: white;
    width: 90%;
    margin: auto;
    .forminputbtn {
      justify-content: end !important;
    }
    /* .forminput,
    .forminputbtn {
      display: flex;
      padding: 1rem;
      align-items: end;
      justify-content: start;
      width: 90%;
      margin: auto;
    } */
    textarea,
    input {
      padding: 0.5rem 1rem;
      border: 0.01rem solid #000000;
      /* border: 0.1rem solid ${(p) => p.theme.colors.PRIMARY_COLOR}; */
      font-size: 1.5rem;
      width: 100%;
    }
    .btn {
      ${CommonButton({
        borderRadius: "1rem",
        padding: ".5rem 3rem",
      })}
    }
  }
`;
