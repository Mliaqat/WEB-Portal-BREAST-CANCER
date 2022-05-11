import styled from "styled-components";
import { CommonButton, FlexboxStyle } from "../../../../style/commomStyle";

export const AddDoctorStyle = styled.article`
  /* background-size: 100% 100%;
  background-color: #050d1f;
  width: 100%;
  height: 150%; */

  .add-model {
    
    width: 800px !important;

    @media (max-with:1000px) {
      width: 100%;
    }
  }

  .openbtn{
    ${CommonButton}
    border-radius: 1rem;
    padding: .5rem;
    position: absolute;
    right: 2rem;

  }

  .card {
    /* background-color: rgba(0, 0, 0, 0.4) !important; */
    margin: 0rem 0rem 4rem 0rem;
    /* border-radius: 2rem; */

    .card-header {
      /* color: white; */
      font-weight: 800;
      text-align: center;
      padding: 1rem;
    }

    .card-body {
      padding: 4rem;
    }

    .form-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      padding: 3rem;
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      margin-bottom: 2rem;
      text-align: center;
      label {
        /* color: white; */
        font-size: 2rem;
        padding: 0rem 0rem 1rem 0rem;
        float: left;
      }
    }
    .form-control {
      font-size: 2rem;
      /* border-radius: 0.5rem !important; */
      padding: 1rem;
      &:focus {
        border: ${(p) => p.theme.colors.PRIMARY_COLOR} 0.3rem solid;
      }
    }
    .select {
      width: 100%;
      font-size: 2rem;
      padding: 1rem;
      border: #ced4da 0.01rem solid;
    }

    .checkbox {
      ${FlexboxStyle({
        justify: "baseline",
      })}
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    .checkboxinput {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    .btn {
      ${CommonButton({
        borderRadius: "1rem",
        padding: "1rem 5rem",
      })}
    }
  }
`;
