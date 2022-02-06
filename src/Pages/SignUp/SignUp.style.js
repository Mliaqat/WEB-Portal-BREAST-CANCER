import styled from "styled-components";
import { CommonButton, FlexboxStyle } from "../../style/commomStyle";
// import img from "../../Asset/images/Login.png";

export const Signupstyle = styled.article`
  background-size: 100% 100%;
  background-color: #050d1f;
  width: 100%;
  height: 150%;

  .card {
    background-color: rgba(0, 0, 0, 0.4) !important;
    margin: 12rem 0rem 4rem 0rem;
    border-radius: 2rem;

    .card-header {
      color: white;
      font-weight: 800;
      text-align: center;
      padding: 1rem;
    }

    .card-body {
      padding: 4rem;
    }

    .form-group {
      margin-bottom: 2rem;
      text-align: center;
      label {
        color: white;
        font-size: 2rem;
        padding: 0rem 0rem 1rem 0rem;
        float: left;
      }
    }
    .form-control {
      font-size: 2rem;
      border-radius: 0.5rem !important;
      padding: 1rem;
      &:focus {
        border: ${(p) => p.theme.colors.PRIMARY_COLOR} 0.3rem solid;
      }
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
    .remember-text {
      font-size: 1.8rem;
      color: ${(p) => p.theme.colors.WHITE_COLOR};
    }

    .login-btn {
      margin-top: 4rem;
    }
    .btn {
      ${CommonButton({
        borderRadius: "1rem",
        padding: "1rem 12.6rem",
      })}
    }
    .card-footer {
      font-size: 1.8rem;
      padding: 1.5rem;
      color: ${(p) => p.theme.colors.WHITE_COLOR};
    }
  }
`;
