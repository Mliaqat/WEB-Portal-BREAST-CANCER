import React from 'react'
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from '../../Asset/Icon/Icon';
import { Footerstyle } from './Footer.style';

function Footer() {

    return (
        <Footerstyle>
            <footer className="footer text-center ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4"  >Location</h4>
                            <p className="lead mb-0">
                                I-9 NUML
                                <br />
                                Islamabad{" "}
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4"  >Around the Web</h4>
                            <Link className="icon">
                                <Facebook />
                            </Link>
                            <Link className="icon">
                                <Instagram />
                            </Link>
                            <Link className="icon">
                                <Linkedin />
                            </Link>
                            <Link className="icon">
                                <Twitter />
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4"  >About</h4>
                            <p className="lead mb-0">Changing the future of diagnosis one scan at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>Copyright &copy; Breast Cancer Prediction 2021</small>
                </div>
            </section>


        </Footerstyle>
    )
}

export default Footer;
