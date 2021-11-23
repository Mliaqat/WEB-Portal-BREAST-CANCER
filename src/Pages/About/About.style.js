import styled from "styled-components";

export const Aboutstyle = styled.article`
  margin: auto;
  padding: 8rem;
  background-color: ${(p) => p.theme.colors.BACKGROUND_COLOR};

  .sperater {
    width: 25rem;
  }

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  q::before,
  q::after {
    color: #e84700;
    font-size: 3rem;
    font-weight: 900;
  }
`;
