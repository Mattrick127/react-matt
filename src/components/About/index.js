import React from "react";
import love from "../../assets/images/love.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">My name is Matt, and welcome to my first react.js profile page!</h1>
            <div className="my-2">
                <p>I am currently a UTSA coding boot camp student. I'm almost done, and this has been probably the most challenging thing I've ever done in my life.</p>
                <p>I've learned alot though, and I plan to study more outside of this class so I can feel confident in this new career field.</p>
                <p>I (of course) like video games and making sure my girlfriend and two dogs are happy and healthy.</p>
            </div>
            <img src={love} alt="love"></img>
        </section>
    )
}

export default About;