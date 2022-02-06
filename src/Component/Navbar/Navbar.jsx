import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../../Asset/images/Logo.png"
import { Navbarstyle } from './Navbar.style';

function Navbar() {
    // var nav = document.querySelector('nav');

    // window.addEventListener('scroll', function () {
    //     if (window.pageYOffset > 100) {
    //         nav.classList.add('bg-dark', 'shadow');
    //     }
    //     else {
    //         nav.classList.remove('bg-dark', 'shadow');
    //     }
    // });

    return (
        <Navbarstyle>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                <div className="container">
                    <img src={logo} width={200} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav">
                            <NavLink className="nav-item" to="/">
                                <a className="nav-link text-white" href="#">Home</a>
                            </NavLink>
                            <NavLink className="nav-item" to="About">
                                <a className="nav-link text-white" href="#">About</a>
                            </NavLink>
                            <NavLink className="nav-item" to="Team">
                                <a className="nav-link text-white" to="/Team" href="#">Team</a>
                            </NavLink>
                            <NavLink className="nav-item" to="/Contact">
                                <a className="nav-link text-white" href="#">Contact Us</a>
                            </NavLink>
                            <NavLink className="nav-item" to="/Login">
                                <a className="nav-link text-white" href="#">Login</a>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>




        </Navbarstyle>
    )
}

export default Navbar;
