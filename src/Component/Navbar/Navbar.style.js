import styled from "styled-components";
import { CommonButton } from "../../style/commomStyle";

export const Navbarstyle = styled.nav`
  .navbar {
    background: ${(p) => p.theme.colors.BRICK_RED};
  }

  a {
    // padding: 1rem;
    margin: 0rem 1rem;
    text-decoration: none;
  }

  .nav-item {
    &:hover {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
      border-radius: 1rem;
    }
  }

  .navbar-nav {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    font-weight: 400;
  }
  .is-active {
    background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    padding: 0.3rem;
    border-radius: 1rem;
  }

  .acctbtn{
    ${CommonButton}
    padding: 0.7rem 1rem;
    border-radius: 1rem;
    background-color: white;
    color: black;
  }
`;
