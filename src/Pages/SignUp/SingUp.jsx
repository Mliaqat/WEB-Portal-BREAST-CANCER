import React, { useState } from "react";
import { Link } from "react-router-dom";
// import VideoPlayer from "react-background-video-player";
// import vedio from '../../Asset/vedio/signupvedio.mp4'
import { Signupstyle } from "./SignUp.style";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

function SignUp() {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        ph_no: "",
        address: "",
        dob: "",
        password: ""
    })

    console.log(data)

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };



    return (

        <>
            <Navbar />

            <Signupstyle >
                <div id="signupbg">
                    {/* <article >
                        <VideoPlayer
                            style={{ width: "50%", height: "100%", top: "5%", left: "60%" }}
                            src={vedio}
                            autoPlay={true}
                            muted={true}
                            className="vedio"
                        />
                    </article> */}

                    <article className="container pb-5 pt-5">
                        <article className="card ">

                            <h2 className="card-header ">Registered Now</h2>

                            <article className="form-layout" >

                                <div className="form-group">
                                    <label htmlFor="Fname"> First Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter First name"
                                        name="first_name"
                                        onChange={(e) => handleInputChange(e)}

                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Lname">Last Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Last name"
                                        name="last_name"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>

                                <div className="form-group ">
                                    <label htmlFor="Email">Email Address:</label>
                                    <input
                                        type="Email"
                                        className="form-control"
                                        placeholder="abcd@gmail.com"
                                        name="email"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="Phone_No">Phone Number:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="+9212345678"
                                        name="ph_no"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Address">Address:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Address"
                                        name="address"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />

                                </div>


                                <div className="form-group">
                                    <label htmlFor="DOB">DOB:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter DOB"
                                        name="dob"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>



                                <div className="form-group">
                                    <label htmlFor="Password">Enter Password:</label>
                                    <input
                                        type="Password"
                                        className="form-control"
                                        id="Password"
                                        placeholder="********"
                                        name="password"
                                        required
                                        minLength="8"

                                    />
                                </div>
                                {/* <label className="checkbox" >
                                        <input
                                            type="checkbox"
                                            required="required"
                                            className="checkboxinput"

                                        />
                                        <article>
                                            <label className="remember-text"> I Agree To The Terms & Conditions</label>
                                        </article>
                                    </label> */}

                                <div className="form-group">
                                    <label htmlFor="CPassword">Confirm Password:</label>
                                    <input
                                        type="Password"
                                        className="form-control"
                                        id="CPassword"
                                        placeholder="*******"
                                        name="password"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                        minLength="8"
                                    />
                                    <span id="message"></span>
                                </div>
                            </article>


                            <article className="d-flex justify-content-center mt-0">
                                <input type="submit" value="SIGNUP" className="login-btn btn" />

                            </article>



                            <article className="card-footer mt-3">
                                <div className="d-flex justify-content-center links">
                                    <Link to="/login">Login Now!</Link>
                                </div>

                            </article>
                        </article>
                    </article>
                </div>
            </Signupstyle>
            <Footer />
        </>
    )
}

export default SignUp;


