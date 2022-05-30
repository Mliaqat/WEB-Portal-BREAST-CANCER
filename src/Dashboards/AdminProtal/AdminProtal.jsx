import React, { useEffect, useState } from 'react';
import './AdminProtal'
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import { DashboardStyle } from '../CommnonStyle/Dashboard.style';
import dashboardicon from "../../Asset/dashboard/dashboard.png"
import patienticon from "../../Asset/dashboard/patient.png"
import docicon from "../../Asset/dashboard/doctor.png"
import adminicon from "../../Asset/dashboard/admin.png"
import logouticon from "../../Asset/dashboard/logout.png"
import editicon from "../../Asset/dashboard/editprofile.png"
import { removeUserSession } from '../../MockData/Common';

function AdminProtal() {

    let navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState();

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
                        <span className="name">Admin</span>
                        <span className="profession">Portal</span>
                    </Link>
                    <hr></hr>

                    <i className='bx bx-chevron-right toggle' onClick={onclickactive}></i>
                </header>

                <div className="menu-bar">

                    <div className="menu">
                        <article >
                            <NavLink to="admin-dashboard" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                <article className='sidebaricon my-5' >
                                    <h2>
                                        <img src={dashboardicon} alt="icon"></img>
                                    </h2>
                                    <label className="text  nav-text mx-3" >Dashboard</label>
                                </article>

                            </NavLink>

                            <article>
                                <NavLink to="managepatient" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={patienticon} alt="icon"></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >Manage Patients</label>
                                    </article>
                                </NavLink>
                            </article>

                            <article>
                                <NavLink to="adddoctor" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={docicon} alt="icon"></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >Manage Doctor</label>
                                    </article>
                                </NavLink>
                            </article>
                            <article>
                                <NavLink to="addadmin" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={adminicon} alt="icon"></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >Manage Admin</label>
                                    </article>
                                </NavLink>
                            </article>
                            <article>
                                <NavLink to="usercontact" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
                                    <article className='sidebaricon my-5' >
                                        <h2>
                                            <img src={patienticon} alt="icon"></img>
                                        </h2>
                                        <label className="text  nav-text mx-3" >User Contacts</label>
                                    </article>
                                </NavLink>
                            </article>


                            <article>
                                <NavLink to="updateprofile" className={({ isActive }) => (isActive ? 'is-active' : 'link')}>
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
                <article className='content'>
                    <Outlet></Outlet>
                </article>

            </section>
        </DashboardStyle>
    );

}

export default AdminProtal;
