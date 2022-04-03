import React from "react";
import resume from "../../assets/images/resume.png";

function Resume() {
    return (
        <section>
            <h1> This is my resume.<p></p>If you'd like to take a closer look, click on the image to download! </h1>
            <a href="../../assets/images/resume.png" download>
            <img src={resume} alt="resume"></img>
            </a>
        </section>
    )
}

export default Resume;