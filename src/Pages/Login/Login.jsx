import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { CrossIcon, PasswordIcon, UserIcon } from "../../Asset/Icon/Icon";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import { Modelstyle } from "../../style/commomStyle";
import { Loginstyle } from "./Login.style";



const Modal = ({ handleClose }) => {



    return (
        <Modelstyle>
            <div className="modal display-block">
                <section className="modal-main">

                    <div className="container">
                        <p className="heading">Forget Password</p>
                        <article className="cancel" onClick={handleClose}><CrossIcon /></article>
                    </div>
                    <hr className="mb-3"></hr>
                    <Loginstyle>

                        <article className="modelbody">
                            <article className="forminput">
                                <h3>Enter Email:</h3>
                                <input type="email"></input>


                            </article>

                            <article className="forminputbtn">
                                <label className="btn">Submit</label>
                            </article>


                        </article>

                    </Loginstyle>



                </section>
            </div>
        </Modelstyle >
    );
};

function Login() {
    const [show, setShow] = useState(false);


    const hanldeClick = () => {
        setShow(true);
    };
    const hideModal = () => {
        setShow(false);
    };

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let url = "http://localhost:5000/login";

    const Submit = async () => {
        await axios.post(url, data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }





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
                                                type="email"
                                                className="form-control"
                                                placeholder="E-mail"
                                                name="email"
                                                required
                                                onChange={(e) => handleInputChange(e)}

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
                                                onChange={(e) => handleInputChange(e)}
                                                required

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
                                                onClick={Submit}

                                            />
                                        </Link>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account? &nbsp;<Link to="/signup">Sign Up</Link>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a className="forgetbtn" onClick={() => hanldeClick()}>Forgot your password? </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                {show && <Modal handleClose={hideModal} />}
            </Loginstyle>
            <Footer />
        </>
    )
}

export default Login;


