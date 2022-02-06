import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "react-background-video-player";
import vedio from '../../Asset/vedio/signupvedio.mp4'
import { Signupstyle } from "./SignUp.style";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

function SignUp() {
    return (

        <>
            <Navbar />

            <Signupstyle >
                <div id="signupbg">
                    <article >
                        <VideoPlayer
                            style={{ width: "40%", height: "100%", top: "0%", left: "60%" }}
                            src={vedio}
                            autoPlay={true}
                            muted={true}
                            className="vedio"
                        />
                    </article>
                    <article className="container pb-5 pt-5">
                        <article className="card ">

                            <h2 className="card-header ">Registered Now</h2>

                            <form className="row  justify-content-center" >
                                <div className="col-sm-4 mx-5">
                                    <div className="form-group">
                                        <label htmlFor="Fname"> First Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Fname"
                                            placeholder="Enter First name"
                                            name="F_Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Phone_No">Phone Number:</label>
                                        <input
                                            type="Number"
                                            className="form-control"
                                            id="Phone_No"
                                            placeholder="+9212345678"
                                            name="Phone_No"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Address">Address:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Address"
                                            placeholder="Enter Address"
                                            name="Address"
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
                                            name="Password"
                                            required
                                            minLength="8"
                                        />
                                    </div>
                                    <label className="checkbox" >
                                        <input
                                            type="checkbox"
                                            required="required"
                                            className="checkboxinput"

                                        />
                                        <article>
                                            <label className="remember-text"> I Agree To The Terms & Conditions</label>
                                        </article>
                                    </label>
                                </div>
                                <div className="col-sm-4">

                                    <div className="form-group">
                                        <label htmlFor="Lname">Last Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Lname"
                                            placeholder="Enter Last name"
                                            name="L_Name"
                                            required
                                        />
                                    </div>

                                    <div className="form-group ">
                                        <label htmlFor="Email">Email Address:</label>
                                        <input
                                            type="Email"
                                            className="form-control"
                                            id="Email"
                                            placeholder="abcd@gmail.com"
                                            name="Email"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="DOB">DOB:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="DOB"
                                            placeholder="Enter DOB"
                                            name="DOB"
                                        />
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="CPassword">Confirm Password:</label>
                                        <input
                                            type="Password"
                                            className="form-control"
                                            id="CPassword"
                                            placeholder="*******"
                                            name="CPassword"
                                            required
                                            minLength="8"
                                        />
                                        <span id="message"></span>
                                    </div>

                                    <div className="clear"> </div>
                                </div>
                                <div>

                                </div>

                                <input type="submit" value="SIGNUP" className="col-sm-4 login-btn btn" />

                            </form>
                            <div className="card-footer mt-3">
                                <div className="d-flex justify-content-center links">
                                    <Link to="/login">Login Now!</Link>
                                </div>

                            </div>
                        </article>
                    </article>
                </div>
            </Signupstyle>
            <Footer />
        </>
    )
}

export default SignUp;


