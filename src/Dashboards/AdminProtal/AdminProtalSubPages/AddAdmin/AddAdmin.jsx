import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddDoctorStyle } from "../AddDoctor/AddDoctor.style";


function AddAdmin() {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        cnic: "",
        address: "",
        dob: "",
        password: "",
        role: "admin"
    })

    const url = `${process.env.REACT_APP_BASE_URL}/users/signup`;


    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };

    const submit = async (e) => {
        e.preventDefault();
        let formIsValid = true;
        if (data.first_name == "" || data.email == "" || data.password == "" || data.phone_no == "") {
            formIsValid = false
            toast.error("Please Fill All field", {
                theme: 'dark'
            });
        }
        if (formIsValid) {
            try {
                const res = await axios.post(url, data)
                console.log(res)
                toast.success("Signup Successfully", {
                    theme: 'dark'
                });
            } catch (error) {
                console.log(error);
                toast.error("Invalid credentials", {
                    theme: 'dark'
                });
            }

        }

    }



    return (

        <>
            <ToastContainer
            />

            <AddDoctorStyle >
                <div id="signupbg">


                    <article className="container pb-5 pt-5">
                        <article className="card ">

                            <h2 className="card-header ">Add Admin</h2>

                            <article className="form-layout" >

                                <div className="form-group">
                                    <label> First Name:</label>
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
                                    <label>Last Name:</label>
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
                                    <label>Email Address:</label>
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
                                    <label>Phone Number:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="+9212345678"
                                        name="phone_no"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>CNIC:</label>
                                    <input
                                        type="dec"
                                        className="form-control"
                                        placeholder="3710580913371"
                                        name="cnic"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label>Address:</label>
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
                                    <label>DOB:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter DOB"
                                        name="dob"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>



                                {/* <div className="form-group">
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
                                </div> */}
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
                                    <label>Enter Password:</label>
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


                            <article className="d-flex justify-content-center mt-0 mb-3">
                                <button className="login-btn btn" onClick={(e) => submit(e)}>
                                    Add Admin
                                </button>

                            </article>




                        </article>
                    </article>
                </div>
            </AddDoctorStyle>
        </>
    )
}

export default AddAdmin;


