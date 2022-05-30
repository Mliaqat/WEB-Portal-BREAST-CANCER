import React from 'react'
import { Aboutstyle } from './About.style';
import Breaker from "../../Asset/images/breaker.png";
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

function About() {
    return (
        <>
            <Navbar />
            <Aboutstyle>
                <div className="row container-fluid">

                    <div className="col-12 col-sm-12">
                        <div className="col-lg-8 col-sm-12 mx-auto  text-center">
                            <h1>
                                Who we are?
                            </h1>
                            <img className="sperater" src={Breaker} alt="Saperater" />

                            <h4 className="my-3">
                                <q> PROVIDE HUMANITY WITH AUTOMATED, ACCURATE & TIMELY MEDICAL IMAGE DIAGNOSIS </q>
                            </h4>
                            <br /> <br />
                            <p>
                                Our target is to save lives through breast health education that focuses on breast cancer prevention, early detection, risk reduction and healthy lifestyle choices.
                            </p>
                            <br />
                            <h1>
                                Our Mission
                            </h1>
                            <img className="sperater" src={Breaker} alt="Saperater" />
                            <br />
                            <h4 className="my-3">
                                <q> PROVIDE HUMANITY WITH AUTOMATED, ACCURATE & TIMELY MEDICAL IMAGE DIAGNOSIS  </q>
                            </h4>
                            <br />
                            <p className="my-4">
                                Our target is to save lives through breast health education that focuses on breast cancer prevention, early detection, risk reduction and healthy lifestyle choices.
                            </p>
                        </div>
                    </div>
                </div>

            </Aboutstyle>
            <Footer />
        </>
    )
}

export default About;
