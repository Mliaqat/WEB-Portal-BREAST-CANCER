import React, { useEffect, useState } from 'react';
import './UserPortal'
import { NavLink, Link, Outlet } from 'react-router-dom';
import { DashboardStyle } from '../CommnonStyle/Dashboard.style';
import dashboardicon from "../../Asset/dashboard/dashboard.png"
import patienticon from "../../Asset/dashboard/patient.png"
import docicon from "../../Asset/dashboard/doctor.png"
import logouticon from "../../Asset/dashboard/logout.png"
import editicon from "../../Asset/dashboard/editprofile.png"

function UserProtal() {

    const [isOpen, setIsOpen] = useState(false)

    const onclickactive = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    return (
        <DashboardStyle>

            <nav className={`sidebar  ${isOpen ? 'close' : ''}`}>


                <header>


                    <Link to="/" className="text logo-text">
                        <span className="name">User</span>
                        <span className="profession">Protal</span>
                    </Link>
                    <hr></hr>

                    <i className='bx bx-chevron-right toggle' onClick={onclickactive}></i>
                </header>

                <div className="menu-bar">

                    <div className="menu">
                        <article >
                            <NavLink to="user-dashboard" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                <article className='sidebaricon my-5' >
                                    <h2>
                                        <img src={dashboardicon}></img>
                                    </h2>
                                    <label className="text  nav-text mx-3" >Dashboard</label>
                                </article>

                            </NavLink>

                            <article>
                                <NavLink to="view-report" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={patienticon}></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >View Report</label>
                                    </article>
                                </NavLink>
                            </article>

                            <article>
                                <NavLink to="user-profile" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={editicon}></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >Edit Profile</label>
                                    </article>
                                </NavLink>
                            </article>


                        </article>
                    </div>

                    <div className="bottom-content">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                            <article className='sidebaricon mb-5' >
                                <h2>
                                    <img src={logouticon}></img>
                                </h2>
                                <label className="text  nav-text mx-3" >LogOut</label>
                            </article>
                        </NavLink>
                    </div>

                    {/* <div className="menu">
        <ul className="menu-links">
            <li className="nav-link">
                <a href="#">
                    <i className='svgicon' >
                        <DashboardIcon />
                    </i>
                    <Link className="text  nav-text" to="admin-dashboard">Dashboard</Link>
                </a>
            </li>

            <li className="nav-link">
                <a href="#">
                    <i className='svgicon' >
                        <PatientIcon />
                    </i>
                    <Link className="text nav-text" to="managepatient">Manage Patient</Link>
                </a>
            </li>

            <li className="nav-link">
                <a href="#">
                    <i className='svgicon' >
                        <DoctorIcon />
                    </i>
                    <Link to="managedoctor" className="text nav-text">Manage Doctor</Link>
                </a>
            </li>

            <li className="nav-link">
                <a href="#">
                    <i className='svgicon' >
                        <UpdateProfileIcon />
                    </i>
                    <Link to="updateprofile" className="text nav-text">Update Profile</Link>
                </a>
            </li>

        </ul>
    </div>

    <div className="bottom-content">
        <li className="">
            <a href="#">
                <i className='svgicon' >
                    <LogOutIcon />
                </i>
                <span className="text nav-text">Logout</span>
            </a>
        </li>



    </div> */}
                </div>

            </nav>

            {/* <nav className={`sidebar  ${isOpen ? 'close' : ''}`}>

                <header>

                    <div className="text logo-text">
                        <span className="name">User</span>
                        <span className="profession">Protal</span>
                    </div>
                    <i className='bx bx-chevron-right toggle' onClick={onclickactive}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">



                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <Link className="text  nav-text" to="user-dashboard">Dashboard</Link>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <Link className="text nav-text" to="view-report">View All Pateint</Link>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bell icon'></i>
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Analytics</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Likes</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-wallet icon' ></i>
                                    <span className="text nav-text">Wallets</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>



                    </div>
                </div>

            </nav> */}

            <section className="home">
                <article className='header-nav'>
                    <article className='profile-wrapper'>
                        <h4>Hi, Liaqat Welcome to our System</h4>
                        <article>
                            <h4>profile</h4>
                        </article>

                    </article>
                </article>
                <article className='content'>
                    <Outlet></Outlet>
                </article>
            </section>
        </DashboardStyle>
    );

}

export default UserProtal;
