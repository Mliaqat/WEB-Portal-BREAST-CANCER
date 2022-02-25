import React, { useState } from 'react'
import { ProfileModalStyle } from '../../../CommnonStyle/Dashboard.style';

function DoctorProfile() {
    const [image, setImage] = useState([]);
    const [postimage, setpostimage] = useState();
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

    const filehandler = (e) => {
        setImage(e.target.files[0]);

        if (e.target.files.length !== 0) {
            setpostimage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <ProfileModalStyle>
            <h2 className="title">Update Profile</h2>
            <hr className='mb-5'></hr>
            <form className="profile-form">
                {/* <article className="profile-detail-wrapper">
                    <label htmlFor="upload-image" className="user-profile-image-wrapper">
                        {postimage ? (
                            (
                                <img
                                    src={postimage}
                                    alt="Select Image"
                                    className="image-placeholder"
                                />
                            )
                        ) : (
                            <img
                                // src={picture}
                                alt="User Proifle"
                                className="image-placeholder"
                            />
                        )}

                    </label>

                    <h2 className="profile-name">Liaqat</h2>
                </article> */}

                <article className="profile-form-data">


                    <article className="form-details">
                        <article className="form-content">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                onChange={(e) => onInputSubmit(e)}
                                className="custom-input"
                            />
                        </article>
                        <article className="form-content">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                onChange={(e) => onInputSubmit(e)}
                                className="custom-input"
                            />
                        </article>
                        <article className="form-content">
                            <label>Mobile</label>
                            <input
                                type="tel"
                                name="email"
                                onChange={(e) => onInputSubmit(e)}
                                className="custom-input"
                            />
                        </article>
                        <article className="form-content">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => onInputSubmit(e)}
                                className="custom-input"
                            />
                        </article>
                        {/* <article className="form-content">
                            <label>Profile Image</label>
                            <input
                                type="file"
                                onChange={(e) => filehandler(e)}
                                className="custom-input"
                            />
                        </article> */}
                        <article className="form-content">
                            <label>Description</label>
                            <textarea
                                name="status"
                                className="custom-input"
                                onChange={(e) => onInputSubmit(e)}
                                cols="30"
                                rows="5"
                            ></textarea>
                        </article>
                    </article>

                    <article className="form-footer mb-5">
                        <button className="update-button mx-3">
                            Update
                        </button>
                        <button
                            className="cancel-button mx-3"

                        >
                            Cancel
                        </button>
                    </article>
                </article>
            </form>
        </ProfileModalStyle>
    )
}

export default DoctorProfile;