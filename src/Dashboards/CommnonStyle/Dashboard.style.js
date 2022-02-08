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
    width: 250px;
    /* padding: 10px 14px; */
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100;
  }
  .sidebar.close {
    width: 88px;
  }

  /* ===== Reusable code - Here ===== */
  .sidebar li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .header-nav {
    background: black;
    height: 7rem;
  }
  header {
    background: black;
    color: white;
    height: 7rem;
  }

  .sidebar header,
  .sidebar .icon {
    min-width: 60px;
  }

  .sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .sidebar .text,
  .sidebar .icon {
    color: var(--text-color);
    transition: var(--tran-03);
  }

  .sidebar .text {
    font-size: 17px;
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
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: ${(p) => p.theme.colors.BRICK_RED};
    color: var(--sidebar-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
  }

  .sidebar.close .toggle {
    transform: translateY(-50%) rotate(0deg);
  }

  .sidebar .menu {
    margin-top: 40px;
  }

  .sidebar li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
  }

  .sidebar .menu-bar {
    height: calc(100% - 55px);
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
    top: 7rem;
    left: 250px;
    height: 100vh;
    width: calc(100% - 250px);
    background-color: blue;
    transition: var(--tran-05);
  }
  .home .text {
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color);
    padding: 12px 60px;
  }

  .sidebar.close ~ .home {
    left: 78px;
    top: 7rem;
    height: 100vh;
    width: calc(100% - 78px);
  }
`;
