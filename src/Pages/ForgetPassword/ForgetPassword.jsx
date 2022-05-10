import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react/cjs/react.development';
import { ForgetPasswordstyle } from './ForgetPassword.style';

function ForgetPassword(props) {
    let { token } = useParams();
    const url = `${process.env.REACT_APP_BASE_URL}/users/new-password`;
    const [conforimpassword, setconforimpassword] = useState();
    const [password, setpassword] = useState();
    const data = {
        password: conforimpassword,
        token: token,
    }
    const submit = () => {

        let formIsValid = true;

        if (
            password == "" ||
            conforimpassword == ""
        ) {
            formIsValid = false;
            toast.error("Please Fill All field", {
                theme: "dark",
            });
        }
        else if (password !== conforimpassword) {
            formIsValid = false;
            toast.error("Password Must be Matched", {
                theme: "dark",
            });
        }

        if (formIsValid) {
            axios.post(url, data).then((res) => {
                toast.success("Password Updated Successfully", {
                    theme: 'dark'
                });
            }).catch((err) => {
                toast.error("Api Error", {
                    theme: 'dark'
                });
            })
        }
    }
        return (
            <ForgetPasswordstyle>
                <ToastContainer />
                <article className='layout'>
                    <h3 className="description fw-bold">
                        Reset Password
                    </h3>
                    <label className='title'>New Password</label>
                    <input type="password" name="newPassword" onChange={(e) => setpassword(e.target.value)} />
                    <label className='title'>Conforim Password</label>
                    <input type="password" name="conforimPassword" onChange={(e) => setconforimpassword(e.target.value)} />

                    <button className="submit-btn" onClick={submit}>Reset Password</button>
                </article>
            </ForgetPasswordstyle>
        )
    }

    export default ForgetPassword;
