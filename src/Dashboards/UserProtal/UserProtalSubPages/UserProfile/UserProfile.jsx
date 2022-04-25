import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ProfileModalStyle } from '../../../CommnonStyle/Dashboard.style';

function UserProfile() {
    const [user, setuser] = useState("");

    const url = `${process.env.REACT_APP_BASE_URL}/users/62660f0f7afc0fdd7cb277cd`;

    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        mobile: "",
        password: "",
        status: "",
    });

    const onInputSubmit = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };


    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        await axios.get(url).then((res) => {
            setuser(res.data);
            console.log(res.data);

        })
    }

    console.log(user.first_name)



    return (
        <ProfileModalStyle>

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
                                            <h6 class="mb-0">Full Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            Kenneth Valdez
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            fip@jukmuh.al
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Phone</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Mobile</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row my-3">
                                        <div class="col-sm-12">
                                            <button class="editbtn" >Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>



        </ProfileModalStyle>
    )
}

export default UserProfile;