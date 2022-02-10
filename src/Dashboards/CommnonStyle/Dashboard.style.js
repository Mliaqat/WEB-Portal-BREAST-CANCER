import styled from "styled-components";

export const DashboardStyle = styled.main`
  :root {
    /* ===== Colors ===== */
    --body-color: red;
    --sidebar-color: #fff;
    --primary-color: #695cfe;
    --primary-color-light: #f6f5ff;
    --toggle-color: #ddd;
    --text-color: #707070;

    /* ====== Transition ====== */
    --tran-03: all 0.2s ease;
    --tran-03: all 0.3s ease;
    --tran-04: all 0.3s ease;
    --tran-05: all 0.3s ease;
  }

  ::selection {
    background-color: var(--primary-color);
    color: #fff;
  }

  /* ===== Sidebar ===== */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 25rem;
    /* padding: 10px 14px; */
    background: var(--sidebar-color);
    transition: var(--tran-05);
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
  .header-nav {
    background: black;
    height: 7rem;
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
    background: black;
    color: white;
    height: 7rem;
  }

  .sidebar header,
  .sidebar .icon {
    min-width: 6rem;
  }

  .sidebar .icon {
    min-width: 6rem;
    border-radius: 0.6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  .sidebar .text,
  .sidebar .icon {
    color: var(--text-color);
    transition: var(--tran-03);
  }

  .sidebar .text {
    font-size: 1.7rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
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
  }

  .sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -2.5rem;
    transform: translateY(-50%) rotate(180deg);
    height: 2.55rem;
    width: 2.5rem;
    background-color: ${(p) => p.theme.colors.BRICK_RED};
    color: var(--sidebar-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    cursor: pointer;
    transition: var(--tran-05);
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
    transition: var(--tran-03);
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

  .home {
    position: absolute;
    left: 25rem;
    height: 100vh;
    width: calc(100% - 25rem);
    background-color: blue;
    transition: var(--tran-05);
  }
  .home .text {
    font-size: 3rem;
    font-weight: 500;
    color: var(--text-color);
    padding: 1.2rem 6rem;
  }

  .sidebar.close ~ .home {
    left: 7.8rem;
    height: 100vh;
    width: calc(100% - 7.8rem);
  }
  .logout {
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
  }
`;
