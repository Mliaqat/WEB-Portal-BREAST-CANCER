import styled from "styled-components";
import { CommonButton } from "../../style/commomStyle";
import img from "../../Asset/images/Login.png";

export const Loginstyle = styled.article`
  background-image: url(${img});
  width: 100%;
  .card {
    height: 47rem;
    width: 40rem;
    background-color: rgba(0, 0, 0, 0.5) !important;
    margin: 12rem 0rem 4rem 0rem;

    .card-header {
      color: white;
      font-weight: 800;
      padding: 1rem;
    }

    .card-body {
      padding: 4rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-control {
      font-size: 2rem;
      &:focus {
        border: ${(p) => p.theme.colors.PRIMARY_COLOR} 0.3rem solid;
        outline: 0;
        box-shadow: none;
      }
    }
    .input-group-text {
      background-color: ${(p) => p.theme.colors.PRIMARY_COLOR};
      border: 0 !important;
      padding: 1rem;
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
  .forgetbtn {
    color: #0d6efd;
    text-decoration: underline;
    cursor: pointer;
  }

  .modelbody {
    background-color: white;
    .forminputbtn {
      justify-content: end !important;
    }
    .forminput,
    .forminputbtn {
      display: flex;
      padding: 1rem;
      align-items: end;
      justify-content: start;
      width: 90%;
      margin: auto;
    }
    input {
      padding: 0.5rem;
      border: 0.1rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
      font-size: 1.5rem;
      width: 72%;
      margin-left: 1rem;
    }
    .btn {
      ${CommonButton({
        borderRadius: "1rem",
        padding: ".5rem 3rem",
      })}
    }
  }
`;
