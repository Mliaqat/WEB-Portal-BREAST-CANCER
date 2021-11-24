import styled from "styled-components";

export const Sidebarstyle = styled.div`
  .topnavbar {
    background-color: ${(p) => p.theme.colors.BRICK_RED};
    /* padding: 2rem; */
    img {
      width: 20rem;
    }
  }
  .offcanvas {
    z-index: 0;
  }

  .sidebar-text {
    margin-top: 2rem li {
      color: ${(p) => p.theme.colors.BLACK_COLOR};
    }

    h1 {
      font-size: 2.5rem;
    }

    span {
      font-size: 2rem;
      color: Black;
    }
  }

  .isactive {
    background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
  }

  .sidebar-nav {
    padding-top: 5rem;
  }

  .sidebar-nav {
    width: 27rem;
  }

  .nav-link {
    margin-left: 2rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
    padding: 1rem;
  }

  .sidebar-link {
    display: flex;
    align-items: center;
  }

  .sidebar-link .right-icon {
    display: inline-flex;
  }

  .sidebar-link[aria-expanded="true"] .right-icon {
    transform: rotate(180deg);
  }

  .offcanvas-start {
    border-right: none;
  }

  @media (min-width: 992px) {
    body {
      overflow: auto !important;
    }

    /* this is to remove the backdrop */
    .offcanvas-backdrop::before {
      display: none;
    }

    .sidebar-nav {
      -webkit-transform: none;
      transform: none;
      visibility: visible !important;
      height: 100%;
      background-color: ${(p) => p.theme.colors.BRICK_RED};
      top: 7rem;
      color: Black;
    }
  }

  .iconsidebar {
    > svg {
      width: 2rem;
      fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
    }
  }

  .icondropdown {
    > svg {
      width: 1.2rem;
      margin-left: 0.5rem;
      fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
    }
  }

  .menue {
    svg > {
      width: 2rem;
    }
  }

  .card-body {
    padding: 3rem 1rem;
  }

  tbody {
    font-size: 1.5rem;
  }

  thead,
  tfoot {
    font-size: 2rem;
  }

  @media screen and (max-width: 990px) {
    .sidebar-nav {
      margin-top: 5rem;
      padding-top: 0rem;
    }
  }

  @media screen and (max-width: 380px) {
    .sidebar-nav {
      margin-top: 5rem;
      padding-top: 0rem;
    }
    .navbg .navbar-brand {
      font-size: 2rem;
    }
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.5rem grey;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: $dark-shadow;
    border-radius: 1rem;
  }

  .dashboard-body {
    margin: 2rem 2rem 2rem 28rem;
  }
`;
