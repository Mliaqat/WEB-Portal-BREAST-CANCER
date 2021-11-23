import styled from "styled-components";
import { CommonButton, FlexboxStyle } from "../../../../../style/commomStyle";

export const AddCustomerStyle = styled.article`
  .section-header {
    ${FlexboxStyle}

    .heading {
      font-size: 2.5rem;
    }

    .add-customer-button {
      ${CommonButton({ padding: "1rem" })};
    }
  }

  .customer-table {
    margin-top: 3rem;

    thead {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};

      tr {
        td {
          color: ${(p) => p.theme.colors.WHITE_COLOR};
          padding: 0.5rem;
          text-align: center;
          width: 18rem;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;
          text-align: center;
          width: 18rem;

          .user-avatar {
            max-width: 4rem;
          }

          button {
            background: none;
            border: none;
            margin-right: 1rem;

            > svg {
              width: 2rem;
            }
          }
        }
      }
    }
  }
`;
