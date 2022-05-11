import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteIcon } from "../../../../Asset/Icon/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddDoctorStyle } from "../AddDoctor/AddDoctor.style";
import { TableStyle } from "../../../CommnonStyle/Dashboard.style";

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
    role: "admin",
  });

  const url = `${process.env.REACT_APP_BASE_URL}/users/signup`;
  const geturl = `${process.env.REACT_APP_BASE_URL}/users`;
  const [userdata, setuserData] = useState([]);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regexp = new RegExp("^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$");
  var pattern = new RegExp(/^[0-9\b]+$/);             

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
      data.first_name == "" ||
      data.email == "" ||
      data.password == "" ||
      data.phone_no == ""
    ) {
      formIsValid = false;
      toast.error("Please Fill All field", {
        theme: "dark",
      });
    }

    else if (reg.test(data.email) === false) {
        formIsValid = false;
        toast.error("Please Enter a Valid Email", {
          theme: "dark",
        });
      }
      else if (data.phone_no.length !== 11) {
        formIsValid = false;
        toast.error("Please Enter Valid Phone no", {
          theme: "dark",
        });
      }else if(!pattern.test(data.phone_no)){
        formIsValid = false;
        toast.error("Please Enter valid Phone no", {
          theme: "dark",
        });
      } 
    
     else if (!regexp.test(data.cnic)) {
        formIsValid = false;
        toast.error("Please Enter a Valid Cnic", {
          theme: "dark",
        });
      }


    //   -----------Post Api------------

    if (formIsValid) {
      try {
        const res = await axios.post(url, data);
       getuser();
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


 
  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    await axios.get(geturl).then((res) => {
      setuserData(res.data);
      console.log(res.data);
    });
  };

  const deleteuser = (id) => {
    axios
      .delete(`${geturl}/${id}`)
      .then((res) => {
        console.log(res);
        getuser();
      })
      .catch((err) => {
        console.log(err);
      });
  };


 

  return (
    <>
      <ToastContainer />

      <AddDoctorStyle>

      <button type="button" className="openbtn" data-bs-toggle="modal" data-bs-target="#myModal">
    Add Admin
  </button>

      <TableStyle>
      <h2 className="title">Manage Admin</h2>
      <hr className="mb-5"></hr>

      <table>
        <thead>
          <tr>
            <th scope="col">Sr#</th>
            <th scope="col">Patient ID</th>
            <th scope="col">Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata &&
            userdata
              .filter((userdata) => userdata.role === "admin").slice(0).reverse()
              .map((userdata, index) => {
                return (
                  <tr key={index}>
                    <td data-label="Sr#">{index + 1}</td>
                    <td data-label="Patient ID">{userdata?.cnic}</td>
                    <td data-label="Name">{userdata?.first_name}</td>
                    <td data-label="Date">{userdata?.dob} </td>
                    <td data-label="Action">
                    <article className="action-buttons-wrapper">
                      <button
                        className="action-button"
                        data-bs-toggle="modal" data-bs-target="#myModal1"                
                      >
                        <DeleteIcon />
                      </button>
                    </article>
                    <div class="modal" id="myModal1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                
                      <div class="modal-header">
                        <h4 class="modal-title">Delete Item</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                
                     
                      <div class="modal-body">
                        Are you sure?
                      </div>
                
                     
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={()=>deleteuser(userdata?._id)} data-bs-dismiss="modal">Delete</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      </div>
                
                    </div>
                  </div>
                </div>
                
                  </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </TableStyle>

    
{/* <!-- The Modal --> */}
<div className="modal" id="myModal">
  <div className="modal-dialog w-100">
    <div className="modal-content add-model">


   
      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Add Admin</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      
        <div id="signupbg">
          <article className="container pb-1 pt-1">
            <article className="card ">
             

              <article className="form-layout">
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
                  <div className="d-flex justify-content-between">
                    <label>CNIC:</label>
                    <p >
                      <small>Please Enter with Dash(-)</small>
                    </p>
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
      
      </div>     

     

    </div>
    
   
  </div>

</div>
</AddDoctorStyle>

    </>
  );
}

export default AddAdmin;
