import React from 'react'
import { UserIcon } from '../../Asset/Icon/Icon';
import { Contactstyle } from './Contact.style';

function Contact() {
    return (
        <Contactstyle>
            <article className="box">
                <div className="row container text-center">

                    <div className="col-md-12 text-white col-md-offset-1 ">
                        <h1>Get In Touch</h1>
                    </div>

                </div>
                <br /><br />
                <form action="">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-1">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="input-group form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="User Name"
                                            name="email"

                                        />
                                    </div>
                                    <div className="input-group form-group">

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="E-Mail"
                                            name="email"

                                        />
                                    </div>
                                    <div className="input-group form-group">

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone No"
                                            name="email"

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

    )
}

export default Contact;
