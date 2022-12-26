import React from "react";

export default function Resume() {
    return(
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div>
                <h2> Acquired Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>APIs</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>Sequelize</li>
                </ul>
            </div>
            <div>
                <p>And much more!!!</p>
            </div>
            <div className="bottom-spacing">
                <a href={require("../assets/resume/Dejah Harris Resume.pdf")} download>
                    <h3>Take a look at my Resume!</h3>
                </a>
            </div>
        </section>
    );
}