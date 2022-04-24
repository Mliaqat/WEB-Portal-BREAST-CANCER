import React, { useState } from 'react'
// import { UserIcon } from '../../Asset/Icon/Icon';
import axios from 'axios';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import { Contactstyle } from './Contact.style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {


    const url = `${process.env.REACT_APP_BASE_URL}/contacts/contact`;

    const [data, setData] = useState({

        user_name: "",
        email: "",
        phone_no: "",
        discripition: "",
    })


    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };



    const submit = async (e) => {
        e.preventDefault();
        let formIsValid = true;
        if (data.user_name === "") {
            formIsValid = false
            toast.error("Please Add User Name", {
                theme: 'dark'
            });
        }
        else if (data.email === "") {
            formIsValid = false
            toast.error("Please Add Your Email", {
                theme: 'dark'
            });
        }
        else if (data.phone_no === "") {
            formIsValid = false
            toast.error("Please Add Your Phone no", {
                theme: 'dark'
            });
        }
        else if (data.discripition === "") {
            formIsValid = false
            toast.error("Please Add Description", {
                theme: 'dark'
            });
        }


        if (formIsValid) {
            try {
                const res = await axios.post(url, data)
                console.log(res)
                toast.success("Your Query Add Successfully", {
                    theme: 'dark'
                });
            } catch (error) {
                console.log(error);
                toast.error("Please Try Again", {
                    theme: 'dark'
                });
            }

        }

    }




    return (
        <>
            <Navbar />
            <ToastContainer
            />
            <Contactstyle>

                <article className="box">
                    <div className="row container text-center">

                        <div className="col-md-12 col-sm-12 text-white col-md-offset-1  ">
                            <h1 className='heading'>Get In Touch</h1>
                        </div>

                    </div>
                    <br /><br />

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-md-offset-1">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="input-group form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="User Name"
                                            name="user_name"
                                            pattern='[A-Za-z]*.{3,}'
                                            title='Enter Valid Name'
                                            onChange={(e) => handleInputChange(e)}
                                            required

                                        />
                                    </div>
                                    <div className="input-group form-group">

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="E-Mail"
                                            name="email"
                                            // pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                                            required
                                            onChange={(e) => handleInputChange(e)}
                                            title='Enter Valid Email'

                                        />
                                    </div>
                                    <div className="input-group form-group">

                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone No"
                                            name="phone_no"
                                            onChange={(e) => handleInputChange(e)}
                                            pattern='[0-9]{11}'
                                            required
                                            title='Enter Phone No'

                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mx-auto">
                                    <div className="input-group form-group">
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            cols="30" rows="6"
                                            placeholder="Enter your Message"
                                            name="discripition"
                                            onChange={(e) => handleInputChange(e)}
                                            required
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="form-group">
                                <button onClick={(e) => submit(e)} type="submit" className="button">Submit</button>
                            </div>
                        </div>

                    </div>


                </article>

            </Contactstyle >
            <Footer />
        </>

    )
}

export default Contact;
