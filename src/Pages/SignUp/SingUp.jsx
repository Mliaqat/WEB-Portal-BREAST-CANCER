import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { PasswordIcon, UserIcon } from "../../Asset/Icon/Icon";
import { Signupstyle } from "./SignUp.style";

function SignUp() {
    return (
        // <div>
        // <app auth={this.state.auth} /></div>
        <Signupstyle >
            <div id="signupbg">
                <article className="container pb-5 pt-5">
                    <article className="card ">
                        <h2 className="card-header ">Registered Now</h2>

                        <form className="row  justify-content-center" >
                            <div className="col-sm-4 mx-5">
                                <div className="form-group">
                                    <label for="Fname"> First Name:</label>
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
                                    <label for="Phone_No">Phone Number:</label>
                                    <input
                                        type="Number"
                                        className="form-control"
                                        id="Phone_No"
                                        placeholder="+9212345678"
                                        name="Phone_No"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="Address">Address:</label>
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
                                    <label for="Password">Enter Password:</label>
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
                                    <label for="Lname">Last Name:</label>
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
                                    <label for="Email">Email Address:</label>
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
                                    <label for="DOB">DOB:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="DOB"
                                        placeholder="Enter DOB"
                                        name="DOB"
                                    />
                                </div>



                                <div className="form-group">
                                    <label for="CPassword">Confirm Password:</label>
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
    )
}

export default SignUp;


