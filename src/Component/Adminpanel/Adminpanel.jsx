import React from "react";

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { DashboardIcon, ManageUserIcon } from "../../Asset/Icon/Icon";
import Dashboardcontent from "./Dashboardcontent";
import { Sidebarstyle } from "./Style/Adminpanel.style";
import UserList from "./Subpages/ManageUser/UserList/UserList";
import logo from '../../Asset/images/Logo.png'
import Seereport from "./Subpages/ManageUser/UserList/SeeReport/Seereport";

function Adminpanel() {
  return (
    <Sidebarstyle>

      <nav className="navbar topnavbar navbar-expand-lg navbg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            {/* <span className="navbar-toggler-icon menue"><Menue /> </span> */}
          </button>
          <Link
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon menue"><Menue /> </span> */}
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            <form className="d-flex ms-auto my-3 my-lg-0">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btnsearch btn-light" type="submit">
                  {/* <span className="icon"><Search /></span> */}
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <span className="iconuser"><User /></span> */}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Account setting</a></li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* OffCanvas */}


      <nav className="navbar navbar-expand-lg navbg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon menue">
              {/* <Menue /> */}
            </span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start sidebar-nav navbg"
        tabindex="-1"
        id="sidebar"
      >
        <aside className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav sidebar-text">
              <li>
                <NavLink
                  to="/admin"
                  activeClassName="isactive"
                  className="nav-link px-3"
                >
                  <span className="me-3 iconsidebar">
                    <DashboardIcon />
                  </span>
                  <span>Dashboard</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/user"
                  activeClassName="isactive"
                  className="nav-link px-3"
                >
                  <span className="me-3 iconsidebar">
                    <ManageUserIcon />
                  </span>
                  <span>Manage User</span>
                </NavLink>


              </li>

              <li>
                <a
                  className="nav-link px-3 mt-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#ManageReseller"
                >
                  <span className="me-3 iconsidebar">
                    {/* <UserIcon /> */}
                  </span>
                  <span> Manage Patinet</span>
                  <span className="ms-auto icondropdown right-icon">
                    {/* <Dropdown /> */}
                  </span>
                </a>

              </li>

              <li>
                <a
                  className="nav-link px-3 mt-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#ManageCategory"
                >
                  <span className="me-3 iconsidebar">
                    {/* <ProductIcon /> */}
                  </span>
                  <span> Manage Doctor</span>
                  <span className="ms-auto icondropdown right-icon">
                    {/* <Dropdown /> */}
                  </span>
                </a>

              </li>

              <li>
                <a
                  className="nav-link px-3 mt-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#Reports"
                >
                  <span className="me-3 iconsidebar">
                    {/* <OrderIcon /> */}
                  </span>
                  <span>Manage Patient Reports</span>
                  <span className="ms-auto icondropdown right-icon">
                    {/* <Dropdown /> */}
                  </span>
                </a>

              </li>

              <li>
                <a
                  className="nav-link px-3 mt-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#PaymentManagement
                                   "
                >
                  <span className="me-3 iconsidebar">
                    {/* <PaynmentIcon /> */}
                  </span>
                  <span>Change Account Info</span>
                  <span className="ms-auto icondropdown right-icon">
                    {/* <Dropdown /> */}
                  </span>
                </a>

              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <section className="dashboard-body">

        <Router>
          <Switch>
            <Route exact path="/admin" component={Dashboardcontent} />
            <Route exact path="/user" component={UserList} />
          </Switch>
        </Router>
      </section>


    </Sidebarstyle>


  );
}

export default Adminpanel;
