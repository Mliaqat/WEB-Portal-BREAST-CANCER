import React, { useEffect, useState } from 'react';
import './AdminProtal'
import { Link, Outlet } from 'react-router-dom';
import { DashboardStyle } from '../CommnonStyle/Dashboard.style';
import { BiLogIn } from "react-icons/bi";
import { DashboardIcon, DoctorIcon, LogOutIcon, PatientIcon, UpdateProfileIcon } from '../../Asset/Icon/Icon';

function AdminProtal() {

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


                    <div className="text logo-text">
                        <span className="name">Admin</span>
                        <span className="profession">Protal</span>
                    </div>


                    <i className='bx bx-chevron-right toggle' onClick={onclickactive}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">



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



                    </div>
                </div>

            </nav>


            <section className="home">
                <article className='header-nav'>
                    <label className='logout'>
                        <article className='btn'>
                            <i className='bx bx-log-in header-icon' ></i>
                            <p>Logout</p>
                        </article>
                    </label>
                </article>
                <Outlet></Outlet>
            </section>
        </DashboardStyle>
    );

}

export default AdminProtal;
