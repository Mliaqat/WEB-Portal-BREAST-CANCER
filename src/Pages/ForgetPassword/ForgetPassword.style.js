import styled from "styled-components";
import { CommonButton } from "../../style/commomStyle";

export const ForgetPasswordstyle = styled.article`
  .layout {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0rem 0.3rem 2rem 0.6rem rgba(3, 3, 3, 0.1);
    width: 30%;
    padding: 2rem;
    border-radius: 1rem;
    margin: auto;
    margin-top: 1rem;
  }

  .description {
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 0.1rem solid black;
    border-radius: 0.5rem;
  }

  .title {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }

  .submit-btn {
    ${CommonButton};

    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
  }
`;
