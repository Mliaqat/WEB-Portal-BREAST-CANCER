import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ProfileModalStyle } from '../../../CommnonStyle/Dashboard.style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfile() {
    const [user, setuser] = useState("");

    const id = sessionStorage.getItem("userId")
    console.log(id)

    const url = `${process.env.REACT_APP_BASE_URL}/users/${id}`;



    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        cnic: "",
        address: "",
        dob: "",
        password: "",
        role: "user"
    })


    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };


    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        await axios.get(url).then((res) => {
            setuser(res.data);
            setData(res.data)
            console.log(res.data);

        })
    }

    const update = async () => {
        await axios.put(url, data).then((res) => {
            console.log(res)
            toast.success("Signup Successfully", {
                theme: 'dark'
            });

        }).catch((err) => {
            console.log(err)
            toast.error("Network Error", {
                theme: 'dark'
            });
        })

    }



    return (
        <ProfileModalStyle>

            <ToastContainer
            />

            <h2 className="title">Profile</h2>
            <hr className='mb-5'></hr>


            <div class="container">
                <div class="main-body">




                    <div class="row gutters-sm">

                        <div class="offset-lg-2 col-8">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">First Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {user.first_name}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Last Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {user.last_name}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {user.email}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Mobile</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {user.phone_no}
                                        </div>
                                    </div>
                                    <hr></hr>


                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {user.address}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-12">
                                            <button class="editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>







            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Update Profile</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="main-body">
                                    <div class="row">

                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row mb-3 align-items-center">
                                                        <div class="col-sm-3">
                                                            <h6 class="mb-0">First Name</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value={data.first_name}
                                                                name="first_name"
                                                                onChange={(e) => handleInputChange(e)} />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 align-items-center">
                                                        <div class="col-sm-3">
                                                            <h6 class="mb-0">Last Name</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value={data.last_name}
                                                                name="last_name"
                                                                onChange={(e) => handleInputChange(e)} />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 align-items-center">
                                                        <div class="col-sm-3">
                                                            <h6 class="mb-0">Email</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value={data.email}
                                                                name="email"
                                                                onChange={(e) => handleInputChange(e)} />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 align-items-center">
                                                        <div class="col-sm-3">
                                                            <h6 class="mb-0">Mobile</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value={data.phone_no}
                                                                name="phone_no"
                                                                onChange={(e) => handleInputChange(e)} />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 align-items-center">
                                                        <div class="col-sm-3">
                                                            <h6 class="mb-0">Address</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value={data.address}
                                                                name="address"
                                                                onChange={(e) => handleInputChange(e)} />
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">

                            <button type="button" class="editbtn" onClick={() => update()}>Update</button>
                        </div>
                    </div>
                </div>
            </div>



        </ProfileModalStyle>
    )
}

export default UserProfile;