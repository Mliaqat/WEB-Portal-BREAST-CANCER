import styled from "styled-components";
import { CommonGridStyle } from "../../style/commomStyle";

export const Adminpanelstyle = styled.section`
  .heading {
    font-size: 2rem;
  }

  .counters-wrapper {
    ${CommonGridStyle}

    .counter {
      background: ${(p) => p.theme.colors.PLATINUM_COLOR};

      position: relative;

      margin-top: 4rem;

      padding: 0 2rem;
      border-radius: 1rem;

      &:before {
        content: "";

        position: absolute;
        left: 0;
        top: -1.4rem;

        width: 100%;
        height: 0.5rem;
      }

      &:first-child {
        &:before {
          background: ${(p) => p.theme.colors.PRIMARY_COLOR};
        }
      }

      &:nth-child(2) {
        &:before {
          background: ${(p) => p.theme.colors.GREEN_COLOR};
        }
      }

      &:last-child {
        &:before {
          background: ${(p) => p.theme.colors.RED_COLOR};
        }
      }

      .card-icon {
        > svg {
          width: 6rem;
        }
      }

      .user-details {
        z-index: unset;
        background: unset;

        .heading {
          font-size: 4rem;
          color: ${(p) => p.theme.colors.DARK_COLOR};
          font-weight: 800;
        }

        .sub-heading {
          font-size: 2rem;
          color: ${(p) => p.theme.colors.RICH_BLACK_COLOR};
        }
      }
    }
  }

  .customer-table {
    margin-top: 3rem;

    thead {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};

      tr {
        th {
          color: ${(p) => p.theme.colors.WHITE_COLOR};
          padding: 0.5rem;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;
        }
      }
    }
  }
`;
