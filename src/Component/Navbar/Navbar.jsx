import React, { useEffect, useState } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';
import logo from "../../Asset/images/Logo.png"
import { Navbarstyle } from './Navbar.style';

function Navbar() {
    const [role, setrole] = useState("")
    let navigate = useNavigate();

   
        let login = JSON.parse(sessionStorage.getItem("userrole")) 
        
        const handlelogin=()=>{
            console.log(login)
            switch (login) {
                case "user":
                  return navigate("/user-protal");
    
                case "doctor":
                  return navigate("/doctor-protal");
    
                case "admin":
                  return navigate("/admin-protal");
    
                default:
                  return navigate("/");
              }
        }
  


    // setrole(sessionStorage.getItem("userrole"))
    return (
        <Navbarstyle>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                <div className="container">
                    <img src={logo} width={200} alt="user-img" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'nav-item')}>
                                <label className="nav-link text-white" >Home</label>
                            </NavLink>
                            <NavLink to="/About" className={({ isActive }) => (isActive ? 'is-active' : 'nav-item')}>
                                <label className="nav-link text-white">About</label>
                            </NavLink>
                            <NavLink to="/Team" className={({ isActive }) => (isActive ? 'is-active' : 'nav-item')}>
                                <label className="nav-link text-white">Team</label>
                            </NavLink>
                            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'is-active' : 'nav-item')}>
                                <label className="nav-link text-white">Contact Us</label>
                            </NavLink>
                            {
                                login ? (

                                    <label onClick={handlelogin} className='nav-item'>
                                    <label className="nav-link text-white">Account</label>
                                </label>
                                ):(
                                    <NavLink to="/Login" className={({ isActive }) => (isActive ? 'is-active' : 'nav-item')}>
                                    <label className="nav-link text-white">Login</label>
                                </NavLink>
                                )
                           
}


                        </ul>
                        {role &&
                            <h3 className='text-white'>Account</h3>
                        }

                    </div>
                </div>
            </nav>




        </Navbarstyle>
    )
}

export default Navbar;
