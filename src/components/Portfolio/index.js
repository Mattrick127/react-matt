import React from "react";
import budgettracker from "../../assets/images/portfolio/budgettracker.png"
import notetaker from "../../assets/images/portfolio/notetaker.png"
import passwordgenerator from "../../assets/images/portfolio/passwordgenerator.png"
import soulmeet from "../../assets/images/portfolio/soulmeet.png"
import weather from "../../assets/images/portfolio/weatherdashboard.png"
import teamprofile from "../../assets/images/portfolio/teamprofile.png"

function Portfolio() {
    return (
        <section>
            <h1> These are my favorite six completed projects! </h1>
            <img src={budgettracker} alt="budget"></img>
            <p>This website calls upon indexedDB for offline functionality!<a href="https://github.com/Mattrick127/budget-tracker">|Budget Tracker Github|</a></p>
            <img src={notetaker} alt="notetaker"></img>
            <p>This localhost app will use writefile to keep track of notes!<a href="https://github.com/Mattrick127/note-taker">|Note Taker Github|</a></p>
            <img src={passwordgenerator} alt="passwordgenerator"></img>
            <p>This is a javascript powered website that'll give you a prompted random password.<a href="https://github.com/Mattrick127/password-generator">|Password Generator Github|</a></p>
            <img src={soulmeet} alt="soulmeet"></img>
            <p>This is my social network api!<a href="https://github.com/Mattrick127/Soulmeet-social-network-api">|Social Network API Github|</a></p>            
            <img src={teamprofile} alt="weather"></img>
            <p>My weather api that'll call information on your city from oneweather.api<a href="https://github.com/Mattrick127/weather-dashboard">|Weather API Github|</a><a href="https://mattrick127.github.io/weather-dashboard/">|Deployed Site|</a></p>
            <img src={weather} alt="teamprofile"></img>
            <p>This is a inquirer made application that'll provide a profile for your team!<a href="https://github.com/Mattrick127/team-profile-generator">|Team Generator Github|</a><a href="https://mattrick127.github.io/password-generator/">|Deployed Site|</a></p>
        </section>
    )
}

export default Portfolio;