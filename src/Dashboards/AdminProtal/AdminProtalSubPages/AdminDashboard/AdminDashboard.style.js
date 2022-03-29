import styled from "styled-components";

export const AdminDashboardStyle = styled.main`
  .Cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    width: 95%;
    margin: auto;
    margin-top: 3rem;
  }
  .chartlayouts {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .charts {
    width: 30rem;
  }
`;
