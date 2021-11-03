import React from 'react'
import { Aboutstyle } from './About.style';
import Breaker from "../../Asset/images/breaker.png";

function About() {
    return (
        <Aboutstyle>
            <div className="row container-fluid">

                <div className="col-12">
                    <div className="col-8 mx-auto  text-center">
                        <h1>
                            Who we are?
                        </h1>
                        <img src={Breaker} alt="Saperater" />

                        <h4 className="my-3">
                            <q> PROVIDE HUMANITY WITH AUTOMATED, ACCURATE & TIMELY MEDICAL IMAGE DIAGNOSIS </q>
                        </h4>
                        <br /> <br />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquid fugit, quo, at expedita tempore quam a saepe recusandae distinctio voluptatibus dolorem veritatis dignissimos placeat quis? Libero fuga sint illo.
                        </p>
                        <br />
                        <h1>
                            Our Mission
                        </h1>
                        <img src={Breaker} alt="Saperater" />
                        <br />
                        <h4 className="my-3">
                            <q> PROVIDE HUMANITY WITH AUTOMATED, ACCURATE & TIMELY MEDICAL IMAGE DIAGNOSIS  </q>
                        </h4>
                        <br />
                        <p className="my-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sint recusandae autem veniam nisi eius ducimus nihil, tenetur magni nobis praesentium numquam! Suscipit, in numquam. Aliquam repellat quam nesciunt ratione?
                        </p>
                    </div>
                </div>
            </div>

        </Aboutstyle>
    )
}

export default About;
