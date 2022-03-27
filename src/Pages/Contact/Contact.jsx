import React from 'react'
// import { UserIcon } from '../../Asset/Icon/Icon';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import { Contactstyle } from './Contact.style';

function Contact() {
    return (
        <>
            <Navbar />
            <Contactstyle>
                <article className="box">
                    <div className="row container text-center">

                        <div className="col-md-12 col-sm-12 text-white col-md-offset-1  ">
                            <h1 className='heading'>Get In Touch</h1>
                        </div>

                    </div>
                    <br /><br />
                    <form action="">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-md-offset-1">
                                <div className="row">
                                    <div className="col-md-6 mx-auto">
                                        <div className="input-group form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"
                                                name="email"
                                                pattern='[A-Za-z]*.{3,}'
                                                title='Enter Valid Name'
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
                                                title='Enter Valid Email'

                                            />
                                        </div>
                                        <div className="input-group form-group">

                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Phone No"
                                                name="phone no"
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
                                                name="email"
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <input type="submit" className="button" value="Send Message" />
                                </div>
                            </div>

                        </div>

                    </form>
                </article>

            </Contactstyle >
            <Footer />
        </>

    )
}

export default Contact;
