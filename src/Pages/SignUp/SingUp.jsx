import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VideoPlayer from "react-background-video-player";
import vedio from "../../Asset/vedio/signupvedio.mp4";
import { Signupstyle } from "./SignUp.style";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const url = `${process.env.REACT_APP_BASE_URL}/users/signup`;
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regexp = new RegExp('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$');              
  const [passwordShown, setPasswordShown] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    cnic: "",
    address: "",
    dob: "",
    password: "",
    role: "user",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  

  const submit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    if (
      data.first_name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.phone_no === "" || data.cnic === ""
    ) {
      formIsValid = false;
      toast.error("Please Fill All field", {
        theme: "dark",
      });
    }
    if(reg.test(data.email) === false){
        formIsValid = false;
        toast.error("Please Enter a Valid Email", {
          theme: "dark",
        });
    }
    if(data.password.length < 4){
        formIsValid = false;
        toast.error("Please Enter a correct Password", {
          theme: "dark",
        });
    }

    if(reg.test(data.email) === false){
      formIsValid = false;
      toast.error("Please Enter a Valid Email", {
        theme: "dark",
      });
  }

  if (!regexp.test(data.cnic)) {

    formIsValid = false;
    toast.error("Please Enter a Valid Cnic", {
      theme: "dark",
    });


  }



// ---------------Post Api---------------


    if (formIsValid) {
      try {
        const res = await axios.post(url, data);
        console.log(res);
        toast.success("Signup Successfully", {
          theme: "dark",
        });
      } catch (error) {
        console.log(error);
        toast.error("Invalid credentials", {
          theme: "dark",
        });
      }
    }
  };

  // Show Password
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
};

  return (
    <>
      <Navbar />

      <Signupstyle>
        <ToastContainer />
        <div id="signupbg">
          <article>
            <VideoPlayer
              style={{ width: "50%", height: "100%", top: "0%", left: "50%" }}
              src={vedio}
              autoPlay={true}
              muted={true}
              className="vedio"
            />
          </article>

          <article className="container pb-5 pt-5">
            <article className="card ">
              <h2 className="card-header ">Registered Now</h2>

              <article className="form-layout">
                <div className="form-group">
                  <label> First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First name"
                    name="first_name"
                    title="Enter Valid Name"
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
                  <div className="d-flex justify-content-between">
                  <label>CNIC:</label>
                  <p className="text-white"><small>Please Enter with Dash(-)</small></p>
                  </div>
                  <input
                    type="dec"
                    className="form-control"
                    placeholder="37105-8091337-1"
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

                <div className="form-group position-relative">
                  <label>Enter Password:</label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control"
                    id="CPassword"
                    placeholder="*******"
                    name="password"
                    onChange={(e) => handleInputChange(e)}
                    required
                    minLength="8"
                  />
                  <label className="eyeicon" onClick={togglePassword}>
                      {passwordShown ?    <BsFillEyeSlashFill  /> :  <BsFillEyeFill  /> }</label>
                </div>
              </article>

              <article className="d-flex justify-content-center mt-0">
                <button
                  onClick={(e) => submit(e)}
                  type="submit"
                  value="SIGNUP"
                  className="login-btn btn"
                >
                  SIGNUP
                </button>
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
  );
}

export default SignUp;
