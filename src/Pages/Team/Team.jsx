import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from '../../Asset/Icon/Icon';
import { Teamstyle } from './Team.style';
import Breaker from "../../Asset/images/breaker.png";
import { TeamData } from '../../MockData/TeamData';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

function Team() {
    return (
        <>
            <Navbar />
            <Teamstyle>
                <div className="teambody container">
                    <div className="container py-5">
                        <div className="row text-center">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="display-4">The Creative CREW </h1>
                                <img className="sperater" src={Breaker} alt="Saperater" />
                                <h3 className="my-3">
                                    Behind Our System
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row text-center">
                            {TeamData.map((item, index) => {

                                const { name, post, image } = item;

                                return (
                                    <div className="col-xl-3 col-sm-6 mb-5" key={index}>
                                        <div className="bg-white  grow  rounded     py-5 px-4">
                                            <img
                                                src={image}
                                                alt=""
                                                width="100"
                                                className="img-fluid rounded-circle mb-3 img-thumbnail    "
                                            />
                                            <h3 className="my-2 text-dark">{name}</h3>
                                            <h5 className="   my-5 text-uppercase text-muted">
                                                {/* Supervizer */}
                                                {post}
                                            </h5>
                                            <ul className=" mb-2list-inline mt-3">
                                                <li className="list-inline-item">
                                                    <Link href="#" className="icon">
                                                        <Facebook />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#" className="icon">
                                                        <Twitter />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#" className="icon">
                                                        <Instagram />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#" className="icon">
                                                        <Linkedin />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                );
                            })}

                        </div>
                    </div>
                </div>
            </Teamstyle>

            <Footer />
        </>
    )
}

export default Team;
