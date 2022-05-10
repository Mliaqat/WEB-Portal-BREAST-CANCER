import React from 'react';
import 'animate.css';
import { Blockqotestyle, Headerstyle, Headingstyle, Missionstyle } from './Home.style';
import img from '../../Asset/images/women.png';
import VideoPlayer from "react-background-video-player";
import vedio from '../../Asset/vedio/vedio.webm'
import { Ribbion } from '../../Asset/Icon/Icon';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';


const Header = () => {
    return (

        <Headerstyle>
            <article className="header">
                <article className="animate__animated animate__fadeInLeft">
                    <h1 >Helping Women Now!</h1>
                    <a className="btn" href="https://www.facebook.com/">More Information!</a>
                </article>
                <picture className="animate__animated animate__fadeInRight">
                    <img src={img} className="img-fluid" alt="" />
                </picture>
            </article>
        </Headerstyle>
    )

}

const Mission = () => {
    return (

        <Missionstyle>
            <article className="missioncontainer"

            >
                <h1>OUR Mission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nulla alias modi deserunt nihil rerum aspernatur eius omnis cumque quam eum eveniet blanditiis accusantium sunt quod, laudantium voluptatem quos iste.</p>
                <a href="https://www.facebook.com" className="btn">Click Here!</a>
            </article>
        </Missionstyle>
    )
}



const Blockquote = () => {

    return (
        <Blockqotestyle>
            <article className="qotestext" >
                <VideoPlayer
                    className="video"
                    src={vedio}
                    autoPlay={true}
                    muted={true}
                />
                <article className="bg">
                    <h2>WE ARE MAKING PROGRESS</h2>
                    <article >
                        <h4><q> Breast cancer death rates declined 40% from 1989
                            to 2016 among women. The progress is attributed
                            to improvements in early detection.</q></h4>
                    </article>
                </article>
            </article>
        </Blockqotestyle>

    )
}

const Heading = () => {
    return (
        <Headingstyle>

            <article >
                <h1>Help support women in need</h1>
                <h3>Donations are always appreciated, but there are lots of great ways to get involved.</h3>
            </article>
            <article>
                <span className="iconribbon"><Ribbion /></span>
                <a href="https://www.facebook.com" className="btn">Click Here!</a>

            </article>


        </Headingstyle>

    )
}

function Home() {
    return (

        <>
            <Navbar />
            <Header />
            <Mission />
            {/* <Futureservice /> */}
            <Blockquote />
            <Heading />
            <Footer />
        </>



    )
}

export default Home;
