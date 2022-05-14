import React, { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink, Outlet } from 'react-router-dom';
// import { DashboardIcon, PatientIcon, ReportIcon } from '../../Asset/Icon/Icon';
import dashboardicon from "../../Asset/dashboard/dashboard.png"
import patienticon from "../../Asset/dashboard/patient.png"
import logouticon from "../../Asset/dashboard/logout.png"
import editicon from "../../Asset/dashboard/editprofile.png"
import { DashboardStyle } from '../CommnonStyle/Dashboard.style';
import { removeUserSession } from '../../MockData/Common';

function DoctorProtal() {

    let navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false)

    const onclickactive = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        const path = JSON.parse(sessionStorage.getItem('userrole'));

        switch (path) {
            case "user":
                return navigate("/user-protal");

            case "doctor":
                return navigate("/doctor-protal");

            case "admin":
                return navigate("/admin-protal");

            default:
                return navigate("/");
        }
    }, [])

    const handleLogout = () => {
        removeUserSession();

        navigate("/");
    };

    return (
        <DashboardStyle>

            <nav className={`sidebar  ${isOpen ? 'close' : ''}`}>

                <header>

                    <Link to="/" className="text logo-text">
                        <span className="name">Doctor</span>
                        <span className="profession">Portal</span>
                    </Link>
                    <hr></hr>

                    <i className='bx bx-chevron-right toggle' onClick={onclickactive}></i>
                </header>


                <div className="menu-bar">
                    <div className="menu">
                        <article >
                            <NavLink to="dashboard" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                <article className='sidebaricon my-5' >
                                    <h2>
                                        <img src={dashboardicon} alt="icon"></img>
                                    </h2>
                                    <label className="text  nav-text mx-3" >Dashboard</label>
                                </article>

                            </NavLink>

                            <article>
                                <NavLink to="docview-all-patient" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={patienticon} alt="img"></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >Patients Reports</label>
                                    </article>
                                </NavLink>
                            </article>

                            <article>
                                <NavLink to="doc-profile" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={editicon} alt="icon"></img>
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
                                    <img src={logouticon} alt="icon"></img>
                                </h2>
                                <label className="text  nav-text mx-3" onClick={handleLogout} >LogOut</label>
                            </article>
                        </NavLink>
                    </div>
                </div>

            </nav>

            <section className="home">
                <article className='header-nav'>
                    <article className='profile-wrapper'>
                        <h4>Hi, {sessionStorage.getItem("fname")} Welcome to our System</h4>
                        <article>
                            <h4 onClick={handleLogout} className="logouttxt">Logout</h4>
                        </article>

                    </article>
                </article>


                <Outlet></Outlet>
            </section>
        </DashboardStyle>
    );

}

export default DoctorProtal;
