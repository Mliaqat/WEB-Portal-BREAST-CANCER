import styled from "styled-components";
import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DashboardStyle = styled.main`
  /* ===== Sidebar ===== */

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 25rem;
    background: ${(p) => p.theme.colors.BRICK_RED};
    z-index: 100;
  }
  .sidebar.close {
    width: 8.8rem;
  }

  /* ===== Reusable code - Here ===== */
  .sidebar li {
    height: 5rem;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .header-icon {
    min-width: 3.5rem;
    border-radius: 0.6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  header {
    background: ${(p) => p.theme.colors.BRICK_RED};
    color: white;
    height: 7rem;
    a {
      text-decoration: none;
    }
  }

  .svgicon {
    > svg {
      width: 3rem;
      fill: #ffffff;
      /* display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin-right: 2rem;
      margin-left: 1rem; */
    }
  }

  .sidebar .text {
    font-size: 1.8rem;
    font-weight: 700;
    white-space: nowrap;
    opacity: 1;
    color: #ffffff;
  }
  .sidebar.close .text {
    opacity: 0;
  }
  /* =========================== */

  .sidebar header {
    position: relative;
  }

  .sidebar header .image-text {
    display: flex;
    align-items: center;
  }
  .sidebar header .logo-text {
    display: flex;
    height: 7rem;
    font-size: 3rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%) rotate(180deg);
    height: 2.55rem;
    width: 2.5rem;
    background-color: ${(p) => p.theme.colors.BRICK_RED};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    cursor: pointer;
  }

  .sidebar.close .toggle {
    transform: translateY(-50%) rotate(0deg);
  }

  .sidebar li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 0.6rem;
    text-decoration: none;
  }

  .sidebar .menu-bar {
    height: calc(100% - 5.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
  }
  .menu-bar::-webkit-scrollbar {
    display: none;
  }
  .sidebaricon {
    margin-left: 2rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
    img {
      width: 4rem;
    }
  }
  .link {
    text-decoration: none;
    article:hover {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
      margin-left: 1rem;
      padding: 0rem 0rem 0.5rem 1rem;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  }
  .is-active {
    text-decoration: none;
    article,
    article:hover {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
      margin-left: 1rem;
      padding: 0rem 0rem 0.5rem 1rem;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  }

  .home {
    position: absolute;
    left: 25rem;
    width: calc(100% - 25rem);
    background-color: ${(p) => p.theme.colors.BACKGROUND_COLOR};
    height: auto;
    min-height: 100%;
  }
  .home .text {
    font-size: 3rem;
    font-weight: 500;
    padding: 1.2rem 6rem;
  }

  .sidebar.close ~ .home {
    left: 7.8rem;
    height: 100vh;
    width: calc(100% - 7.8rem);
  }
  .bottom-content {
    margin-bottom: 1rem;
  }

  .header-nav {
    position: sticky;
    width: 95%;
    height: 7rem;
    margin: auto;
  }
  .profile-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    border-radius: 0.5rem;
    padding: 1rem;
    /* background: #ebebeb; */
    /* background: #dcdcdc;
    -webkit-box-shadow: 5px 5px 67px #a1a1a1, -5px -5px 67px #ffffff;
    box-shadow: 5px 5px 67px #a1a1a1, -5px -5px 67px #ffffff; */
    background: #f2f0f0;
    -webkit-box-shadow: 5px 5px 67px #b1afaf, -5px -5px 67px #ffffff;
    box-shadow: 5px 5px 67px #b1afaf, -5px -5px 67px #ffffff;
  }
  .content {
    /* margin-top: 2rem; */
  }
  /* .logout {
    display: flex;
    justify-content: end;
    color: white;
    height: 7rem;
    align-items: center;
    font-size: 2rem;
    margin-right: 5rem;
    .btn {
      display: flex;
      border: 0.2rem solid;
      padding: 0.5rem;
      color: white;
    }
  } */
`;

export const TableStyle = styled.main`
  ${CommonSpacing};

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 2rem 0;
  }

  .btn_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .btn {
    ${CommonButton}
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.5rem;
  }

  table {
    border: 1px solid ${(p) => p.theme.colors.PRIMARY_COLOR};
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
      border: 0;
    }

    thead {
      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        background: ${(p) => p.theme.colors.BRICK_RED};

        th {
          color: ${(p) => p.theme.colors.WHITE_COLOR};
          font-size: 1.5rem;
          font-weight: 600;
          padding: 1rem;
        }
      }
    }

    tr {
      border: 1px solid ${(p) => p.theme.colors.PRIMARY_COLOR};
      padding: 0.35em;

      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
      }
    }

    td {
      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        position: relative;

        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;

        &::before {
          ${FlexboxStyle({ justify: "center" })};

          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);

          width: 12rem;
          height: 100%;
          background: ${(p) => p.theme.colors.PRIMARY_COLOR};

          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }

        &:last-child {
          border-bottom: 0;
        }
      }

      .action-buttons-wrapper {
        ${FlexboxStyle({ justify: "center" })};

        .action-button {
          border: none;
          background: none;
          margin-right: 1rem;

          cursor: pointer;

          &:first-of-type {
            > svg {
              fill: ${(p) => p.theme.colors.GREEN_COLOR};
            }
          }

          &:last-of-type {
            > svg {
              fill: ${(p) => p.theme.colors.RED_COLOR};
            }
          }

          > svg {
            width: 2rem;
          }
        }
      }
    }

    th,
    td {
      padding: 0.625em;
      font-size: 1.5rem;
    }

    th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
`;

export const ProfileModalStyle = styled.main`
  ${CommonSpacing};
  .title {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 2rem 0;
  }

  .form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;

    /* border: 2px solid rgba(0, 0, 0, 0.1) !important;
    height: 54px !important; */
    font-size: 18px;
    font-weight: 300;

    border-radius: 0px !important;
    font-size: 2rem;
    border-radius: 0.5rem !important;
    padding: 1rem;
    &:focus {
      border: ${(p) => p.theme.colors.PRIMARY_COLOR} 0.3rem solid;
    }
  }

  input,
  textarea {
    font-size: 1.5rem;
  }
  .profile-form {
    ${CommonGridStyle({ columns: "1fr", columnGap: "1rem" })}
    justify-items: stretch;

    @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
      grid-template-columns: 1fr;
    }

    .profile-detail-wrapper {
      text-align: center;

      #upload-image {
        display: none;
      }

      .image-placeholder {
        width: 25rem;
        height: 25rem;
        border-radius: 50%;

        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
          width: 20rem;
          height: 20rem;
        }
      }
    }

    .profile-form-data {
      .form-title {
        font-weight: 700;
      }

      .form-details {
        ${CommonGridStyle({ columns: "1fr 1fr", columnGap: "1rem" })};

        justify-items: stretch;
        margin: 1rem 0;

        .form-content {
          label {
            font-size: 2rem;
            display: block;
            margin-bottom: 1rem;
          }

          .custom-input {
            width: 100%;
            padding: 1rem;
            border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
            border-radius: 0.5rem;
            background: white;
            outline: none;
          }

          &:last-child {
            grid-column: 1/-1;
          }
        }
      }

      .form-footer {
        ${FlexboxStyle({ justify: "flex-end" })};

        button {
          /* width: 11rem;
          padding: 1rem 1.5rem;
          margin-left: 1rem;
          border: none;
          border-radius: 0.3rem; */
          ${CommonButton}
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-size: 1.5rem;

          cursor: pointer;

          &.cancel-button {
            background: #9e9e9e;
            color: ${({ theme }) => theme.colors.WHITE_COLOR};
            border: 0.2rem solid #9e9e9e;
          }
        }
      }
    }
  }
`;
