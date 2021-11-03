import React from 'react';
import 'animate.css';
import { Blockqotestyle, Futurestyle, Headerstyle, Headingstyle, Missionstyle } from './Home.style';
import img from '../../Asset/images/women.png';
import VideoPlayer from "react-background-video-player";
import vedio from '../../Asset/vedio/vedio.webm'
import { Help, Message, Ribbion, Support } from '../../Asset/Icon/Icon';


const Header = () => {
    return (

        <Headerstyle>
            <article className="header">
                <article className="animate__animated animate__fadeInLeft">
                    <h1 >Helping Women Now!</h1>
                    <button className="btn">More Information!</button>
                </article>
                <picture className="animate__animated animate__fadeInRight">
                    <img src={img} alt="" />
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
                <button className="btn">Click Here!</button>
            </article>
        </Missionstyle>
    )
}

const Futureservice = () => {
    return (
        <Futurestyle>
            <article className="container future">
                <article>
                    <span className="icon"><Message /></span>
                    <h3>What is Breast Cancer?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, illum ducimus. Veniam obcaecati cum praesentium repudiandae nulla nostrum quasi </p>
                    <button className="btn">Click Here!</button>

                </article>
                <article>
                    <span className="icon"><Help /></span>
                    <h3>Get Help Now</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, illum ducimus. Veniam obcaecati cum praesentium repudiandae nulla nostrum quasi </p>
                    <button className="btn">Click Here!</button>
                </article>
                <article>
                    <span className="icon"><Support /></span>
                    <h3>Support the Cause</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, illum ducimus. Veniam obcaecati cum praesentium repudiandae nulla nostrum quasi </p>
                    <button className="btn">Click Here!</button>
                </article>

            </article>
        </Futurestyle>

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
                <button className="btn">Click Here!</button>

            </article>


        </Headingstyle>

    )
}

function Home() {
    return (

        <>
            <Header />
            <Mission />
            <Futureservice />
            <Blockquote />
            <Heading />
        </>



    )
}

export default Home;
