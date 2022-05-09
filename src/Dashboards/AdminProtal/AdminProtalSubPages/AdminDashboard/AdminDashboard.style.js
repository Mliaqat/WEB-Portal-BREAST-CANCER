import styled from "styled-components";

export const AdminDashboardStyle = styled.main`
  .Cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    width: 95%;
    margin: auto;
    margin-top: 0rem;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .chartlayouts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .charts {
    width: 400px;
  }
`;
