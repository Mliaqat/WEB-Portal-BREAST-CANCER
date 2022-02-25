import React from "react";
import { Link } from "react-router-dom";
import { PasswordIcon, UserIcon } from "../../Asset/Icon/Icon";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import { Loginstyle } from "./Login.style";

function Login() {
    return (
        <>
            <Navbar />
            <Loginstyle>
                <article className="loginbackground">
                    <div className="loginbody container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Login</h3>
                                </div>

                                <div className="card-body">
                                    <form method="POST">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <UserIcon />
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="E-mail"
                                                name="email"

                                            />
                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <PasswordIcon />
                                                </span>
                                            </div>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="Password"

                                            />
                                        </div>
                                        <div className="d-flex my-5">
                                            <article >
                                                <input type="checkbox" className="checkboxinput" />
                                            </article>
                                            <article>
                                                <label className="remember-text"> Remember Me</label>
                                            </article>
                                        </div>
                                        <Link to="/doctor-protal" className="form-group login-btn" >
                                            <input
                                                type="submit"
                                                value="Login"
                                                className="btn"

                                            />
                                        </Link>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account? &nbsp;<Link to="/signup">Sign Up</Link>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link to="#">Forgot your password? </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Loginstyle>
            <Footer />
        </>
    )
}

export default Login;


