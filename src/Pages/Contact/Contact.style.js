import styled from "styled-components";
import { CommonButton } from "../../style/commomStyle";
import img from "../../Asset/images/3.png";

export const Contactstyle = styled.article`
  background-image: url(${img});
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: auto;
  padding: 8rem;

  @media (max-width: 600px) {
    padding: 8rem 2rem;
  }

  .box {
    background-color: rgba(0, 0, 0, 0.5) !important;
    padding: 4rem;
  }

  input:invalid,
  textarea:invalid {
    animation: shake 300ms;
    &:focus {
      border: red 0.3rem solid;
    }
  }

  .form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;

    /* border: 2px solid rgba(0, 0, 0, 0.1) !important;
    height: 54px !important; */
    font-size: 18px;
    font-weight: 300;

    border-radius: 0px !important;
  }

  .btn.btn-md {
    padding: 10px 25px !important;
  }
  .btn-primary {
    background: #da1212 !important;
    color: #fff !important;
    border: 2px solid #da1212 !important;
    border-radius: 0px !important;
  }
  .input-group-text {
    background-color: ${(p) => p.theme.colors.PRIMARY_COLOR};
    border: 0 !important;
    padding: 1.48rem;
  }
  .form-group {
    margin-bottom: 2rem;
    text-align: center;
  }
  .form-control {
    font-size: 2rem;
    border-radius: 0.5rem !important;
    padding: 1rem;
    &:focus {
      border: ${(p) => p.theme.colors.PRIMARY_COLOR} 0.3rem solid;
    }
  }

  textarea {
    height: 19.6rem;
  }
  @media (max-width: 500px) {
    .heading {
      font-size: 4rem;
      font-weight: 500;
    }
  }

  .button {
    ${CommonButton({
      borderRadius: "1rem",
    })}

    margin: 2rem 0rem;
  }
`;
