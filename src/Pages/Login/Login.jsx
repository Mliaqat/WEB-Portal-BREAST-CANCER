import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CrossIcon, PasswordIcon, UserIcon } from "../../Asset/Icon/Icon";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import { Modelstyle } from "../../style/commomStyle";
import { Loginstyle } from "./Login.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { setUserSession } from "../../MockData/Common";

const Modal = ({ handleClose }) => {
  const url = `${process.env.REACT_APP_BASE_URL}/users/forgetpassword`;

  const [email, setemail] = useState();
  const [msg, setmsg] = useState();
  const data = {
    email: email,
  };

  const resetpassword = () => {
    axios
      .post(url, data)
      .then((res) => {
        setmsg(res.data.msg);
        toast.success("Email Send Successfully", {
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err);
        setmsg();
        toast.error("Email Not Found", {
          theme: "dark",
        });
      });
  };

  return (
    <Modelstyle>
      <div className="modal display-block">
        <section className="modal-main">
          <div className="container">
            <p className="heading">Forget Password</p>
            <article className="cancel" onClick={handleClose}>
              <CrossIcon />
            </article>
          </div>
          <hr className="mb-3"></hr>
          <Loginstyle>
            <article className="modelbody">
              {msg && <p className="text-center">{msg}</p>}
              <article className="forminput">
                <h3>Enter Email:</h3>
                <input
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </article>

              <article className="forminputbtn">
                <label className="btn" onClick={resetpassword}>
                  Submit
                </label>
              </article>
            </article>
          </Loginstyle>
        </section>
      </div>
    </Modelstyle>
  );
};

function Login(props) {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const hanldeClick = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const url = `${process.env.REACT_APP_BASE_URL}/users/login`;

  const Submit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (     
      data.email === "" ||
      data.password === ""     
    ) {
      formIsValid = false;
      toast.error("Please Fill All field", {
        theme: "dark",
      });
    }
    if (reg.test(data.email) === false) {
      formIsValid = false;
      toast.error("Please Enter a Valid Email", {
        theme: "dark",
      });
    }
    // if(data.password.length < 4){
    //     formIsValid = false;
    //     toast.error("Please Enter a correct Password", {
    //       theme: "dark",
    //     });
    // }

    if (formIsValid) {
      try {
        const res = await axios.post(url, data);

        console.log(res.data);
        if (res.status === 200) {
          setUserSession(
            res.data.token,
            res.data.fname,
            res.data.lname,
            res.data.user_id,
            res.data.email,
            res.data.mobile,
            res.data.cnic,
            res.data.role
          );

          let path = res.data.role;
          switch (path) {
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
      } catch (error) {
        toast.error(error.response.data.message, {
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
      <ToastContainer />
      <Loginstyle>
        <article className="loginbackground">
          <div className="loginbody container">
            <div className="d-flex justify-content-center h-100">
              <div className="card">
                <div className="card-header">
                  <h3>Login</h3>
                </div>

                <div className="card-body">
                  <article className="needs-validation" novalidate>
                    <div className="input-group form-group">
                      <span className="input-group-text">
                        <UserIcon />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        onChange={(e) => handleInputChange(e)}
                        required
                        title="Enter Phone No"
                      />
                    </div>

                    <div className="input-group form-group">
                      <span className="input-group-text">
                        <PasswordIcon />
                      </span>
                      <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                      <label className="eyeicon" onClick={togglePassword}>
                        {passwordShown ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}

                      </label>
                    </div>

                    {/* <div className="d-flex my-5">
                      <article>
                        <input type="checkbox" className="checkboxinput" />
                      </article>
                      <article>
                        <label className="remember-text"> Remember Me</label>
                      </article>
                    </div> */}

                    <article className="form-group login-btn">
                      <button
                        type="submit "
                        className="btn"
                        onClick={(e) => Submit(e)}
                      >
                        Login
                      </button>
                    </article>
                  </article>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center links">
                    Don't have an account? &nbsp;
                    <Link to="/signup">Sign Up</Link>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a className="forgetbtn" onClick={() => hanldeClick()}>
                      Forgot your password?{" "}
                    </a>
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
  );
}

export default Login;
