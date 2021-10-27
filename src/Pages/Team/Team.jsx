import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from '../../Asset/Icon/Icon';
import { Teamstyle } from './Team.style';
import img from "../../Asset/images/a.png"

function Team() {
    return (
        <Teamstyle>
            <div className="teambody container">
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-4">The Creative CREW </h1>
                            <h3 className="my-3">
                                Behind Our System
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white  grow  rounded     py-5 px-4">
                                <img
                                    src={img}
                                    alt=""
                                    width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail    "
                                />
                                <h3 className="my-2 text-dark">Miss Wajiha Mughal</h3>
                                <h5 className="   my-5 text-uppercase text-muted">
                                    Supervizer
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
                        <div className="col-xl-3 col-sm-6 mb-5 ">
                            <div className="bg-white grow rounded     py-5 px-4">
                                <img
                                    src={img}
                                    alt=""
                                    width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail    "
                                />
                                <h3 className="my-2 text-dark">M.Liaqat Shehzad</h3>
                                <h5 className="   my-5 text-uppercase text-muted">
                                    Student
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
                        <div className="col-xl-3 col-sm-6 mb-5 ">
                            <div className="bg-white grow rounded     py-5 px-4">
                                <img
                                    src={img}
                                    alt=""
                                    width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail    "
                                />
                                <h3 className="my-2 text-dark">Musharaf Shukoor</h3>
                                <h5 className="   my-5 text-uppercase text-muted">
                                    Student
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
                        <div className="col-xl-3 col-sm-6 mb-5 ">
                            <div className="bg-white rounded grow     py-5 px-4">
                                <img
                                    src={img}
                                    alt=""
                                    width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail    "
                                />
                                <h3 className="my-2 text-dark">Usama ALi</h3>
                                <h5 className="   my-5 text-uppercase text-muted">
                                    Student
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
                    </div>
                </div>
            </div>
        </Teamstyle>
    )
}

export default Team;
