import styled, { css } from "styled-components";

export const FlexboxStyle = ({ align, justify, direction, rowgap }) => css`
  display: flex;
  align-items: ${align || "center"};
  justify-content: ${justify || "space-between"};
  flex-direction: ${direction || "row"};
  row-gap: ${rowgap || "0rem"};
`;

export const CommonGridStyle = ({ columns, rowGap, columnGap, align }) => css`
  display: grid;
  grid-template-columns: ${columns || "repeat(3, 1fr)"};
  grid-row-gap: ${rowGap || "2rem"};
  grid-column-gap: ${columnGap || "2rem"};
  align-items: ${align || "center"};
  justify-items: center;

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
    grid-template-columns: 1fr;
  }
`;

export const CommonSpacing = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const CustomContainer = css`
  max-width: 140rem;
  margin: 0 auto;
`;

export const CommonButton = ({ padding, borderRadius }) => css`
  background: ${(p) => p.theme.colors.PRIMARY_COLOR};
  color: ${(p) => p.theme.colors.WHITE_COLOR};
  border: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};

  padding: ${padding || "1.5rem"};
  border-radius: ${borderRadius || "30rem"};
  font-size: 2rem;
  font-weight: 800;

  cursor: pointer;
  transition: ${(p) => p.theme.transitions.customTransition};

  &:hover {
    background: ${(p) => p.theme.colors.WHITE_COLOR};
    color: ${(p) => p.theme.colors.PRIMARY_COLOR};
  }
`;

export const Modelstyle = styled.main`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 40%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
  }

  .display-block {
    display: block !important;
  }

  .display-none {
    display: none;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .textbox {
    max-height: 30rem;
    margin: auto;
    width: 80%;
  }
  .cancel {
    padding: 1rem;
    position: absolute;
    right: 0;
    cursor: pointer;
    > svg {
      width: 2rem;
    }
  }

  .heading {
    font-size: 3rem;
    font-weight: 500;
    padding: 1rem;
  }
`;
