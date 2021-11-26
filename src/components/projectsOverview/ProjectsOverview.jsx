import { useState } from 'react'
import './ProjectsOverview.css'
import ProjectDesc from '../projectDesc/ProjectDesc'
import arrow from "../../images/arrow.png"
import burgerApp from '../../images/burger-app.png'
import hostApp from '../../images/host-app.png'
import sfLiving from '../../images/sfliving.png'
import youtubeQuiz from '../../images/youtubeQuiz.png'
import samara from '../../images/samara.png'


export default function ProjectsOverview() {

    const data = [
        {
            id: "1",
            idcontainer: "burger",
            title: "Burger Builder",
            img: burgerApp,
            github: "https://github.com/Berezka-creator/burger-app",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "JavaScript","ReactJS", "Redux", "API", "Firebase"],
            desc: "This is a web application that uses ReactJS to create your custom burger, you can choose ingredients and see how your burger will look like and how much will it cost,  The burger animation is done through CSS for faster perfomance. Than you can proceed to checkout and once you submited, it is stored in a database using Firebase. This allows to login and view your orders anytime in the future. ",
            chell: "It was very difficultbu fun"
        },
        {
            id: "2",
            idcontainer: "host",
            title: "Hosting Website",
            img: hostApp,
            github: "https://github.com/Berezka-creator/academind_css_project",
            liveview: "https://berezka-creator.github.io/academind_css_project/",
            tools: [ "HTML", "CSS", "Sass", "JavaScript","Responsive Web Design"],
            desc: "It is a website that provides information about hosting to the customers. The purpose of this project was to practice on CSS features such as: Flexboxes, Grid Layout, Responsive Web Design,  SASS.",
            chell: "It was very difficult but fun"
        },
        {
            id: "3",
            idcontainer: "youtube",
            title: "Youtube API Application",
            img: youtubeQuiz,
            github: "https://github.com/Berezka-creator/qtube",
            liveview: "https://berezka-creator.github.io/qtube/",
            tools: [ "HTML", "CSS", "JavaScript", "JQuery", "Ajax", "YoutubeData API", "Youtube Player API", "SASS"],
            desc: "This is a web application that is similar to youtube but instead of adds, a question is displayed and the client need to answer correctly before being able to play the desired video. It is using YoutubeData API to search for videos and Youtube Player API to play the videos. Logic is done through JQuery and AJAX.",
            chell: "It was very difficultbu fun"
        },
        {
            id: "4",
            idcontainer: "sf",
            title: "Film Festival",
            img: sfLiving,
            github: "https://www.csej.org/",
            liveview: "https://www.csej.org/",
            tools: [ "WordPress", "Elementor"],
            desc: "This is a film festival websilte that I made while my interning at SF Living Wage organisation, personally I made a main page and about page, also Movie list. The website was done using Wordpress and was taken life.",
            chell: "It was very difficultbu fun"
        },
        {
            id: "5",
            idcontainer: "samara",
            title: "WordPress Samara Group",
            img: samara,
            liveview: "http://www.samaragroup.org/",
            tools: [ "WordPress", "Elementor"],
            desc: "This is WordPress website that I made for Samara Group company that summarizes their services.",
            chell: "It was very difficultbu fun"
        }
     
    ]

    return (
        <div className="projectsOverview">
            <div className="container">
            {data.map((d) => (
                <div className="item"  id={d.idcontainer}>
                    <ProjectDesc 
                                style={{paddingTop: '4rem'}}
                                title={d.title}
                                img={d.img}
                                gitHubLink={d.github}
                                liveLink={d.liveview}
                                tools={d.tools}
                                desc={d.desc}
                                id={d.idcontainer+d.id}
                               >
                    </ProjectDesc>
                    <div class="border"></div>
                </div>
                          
                ))}
            </div>
        </div>
    );
}
