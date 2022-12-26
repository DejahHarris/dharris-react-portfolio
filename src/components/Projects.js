import React from "react";
import Projectsdata from "./Projectsdata";

export default function projects() {
    const Projectsdata = [
        {
            name: '1st Portfolio',
            description: 'This is my first portfolio that I have ever created. The programming languages that were used is HTML and CSS.',
            image: 'src/assets/images/1stPortfolio.png',
            github: 'https://github.com/DejahHarris/2-Dejah-Harris-Portfolio',
            deployed: 'https://dejahharris.github.io/2-Dejah-Harris-Portfolio/',
        
            name: 'Code Refactor',
            description: 'For this challenge, I went the extra mile and improve their codebase for long-term sustainability. Ensure that all links are functioning correctly and cleaned up the CSS to make it more efficient, such as by consolidating CSS selectors and properties, organizing them to follow the semantic structure of the HTML elements, and including comments before each element or section of the page.',
            image: 'src/assets/images/CodeRefactor.png',
            github: 'https://github.com/DejahHarris/1-Code-Refactor',
            deployed: 'https://dejahharris.github.io/1-Code-Refactor/',

            name: 'Launch!',
            description: 'This is a webpage that allows a user to generate a SpaceX rocket based off of their personality trait.',
            image: 'src/assets/images/Launch!.png',
            github: 'https://github.com/richielollis/launch',
            deployed: 'https://richielollis.github.io/launch/',

            name: 'Pic Me',
            description: 'PicMe is the place for photographers and clients to connect to build new relationships and strengthen exisiting ones. We like to think of our community as a place where you can share ideas, collaborate with others, or learn about the latest news regarding the industry. Photographers can use their accounts to post for potential clients to see, and for other photographers to look at. PicMe offers users full CRUD capabilites and allows users to manage their work. PicMe currently uses a system based on relevancy to display posts to the user.',
            image: 'src/assets/images/PicMe.png',
            github: 'https://github.com/CalebFunderburk/PicMe',
            deployed: 'https://picme1.herokuapp.com/',
        },
    ];
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Projects</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <projectsData projects={projects[1]}></projectsData>
                    </li>
                    <li className="padding">
                        <projectsData projects={projects[2]}></projectsData>
                        </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <projectsData projects={projects[3]}></projectsData>
                    </li>
                    <li className="padding">
                        <projectsData projects={projects[4]}></projectsData>
                        </li>
                </ul>
            </div>
        </section>
    );
}