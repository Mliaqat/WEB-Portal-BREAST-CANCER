import React, { useEffect, useState } from 'react';
import './UserPortal'
import { Link, Outlet } from 'react-router-dom';
import { DashboardStyle } from '../CommnonStyle/Dashboard.style';

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

export default UserProtal;
