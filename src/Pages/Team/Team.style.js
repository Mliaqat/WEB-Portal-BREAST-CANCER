import styled from "styled-components";

export const Teamstyle = styled.article`
  padding: 8rem;
  background-color: ${(p) => p.theme.colors.BACKGROUND_COLOR};

  @media (max-width: 600px) {
    padding: 8rem 2rem;
  }

  .teambody {
    .icon {
      background: #ffbecf;
      display: inline-block;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      border-radius: 100%;
      margin-right: 15px;
      > svg {
        width: 2rem;
        height: 2rem;
      }
    }

    .sperater {
      width: 25rem;
    }

    .grow {
      box-shadow: 0px 0px 10px 0px #c7bfbf;
    }
    .grow:hover,
    .grow:focus {
      transform: scale(1.05);
    }
  }
`;
