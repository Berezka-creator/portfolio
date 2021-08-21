import { useState } from 'react'
import './ProjectsPage.css'
import ProjectItem from './project/BurgerProject'
import arrow from "../../../images/arrow.png"
import burgerApp from '../../../images/burger-app.png'
import hostApp from '../../../images/host-app.png'
import sfLiving from '../../../images/sfliving.png'
import youtubeQuiz from '../../../images/youtubeQuiz.png'


export default function ProjectsPage() {

    const data = [
        {
            id: "1",
            idcontainer: "burger",
            title: "Burger Builder",
            img: burgerApp,
            github: "https://github.com/Berezka-creator/burger-app",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "JavaScript","ReactJS", "Redux", "API", "Fairbase"],
            desc: "This is mobile app to create your custom burger, you can choose ingredients and see how your burger will look like and how much will it cost, than you can procced to checkout and see your orders in orders page.  and added it in your orders, ",
            chell: "It was very difficultbu fun"
        },
        {
            id: "2",
            idcontainer: "host",
            title: "Hosting App",
            img: hostApp,
            github: "https://github.com/Berezka-creator/academind_css_project",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "Sass", "JavaScript","ReactJS"],
            desc: "It is an app that provides hosting to the customers, contains four pages with description, testimonials and packages and a form page.",
            chell: "It was very difficult but fun"
        },
        {
            id: "3",
            idcontainer: "youtube",
            title: "Youtube Quiz",
            img: youtubeQuiz,
            github: "https://github.com/Berezka-creator/qtube",
            liveview: "https://berezka-creator.github.io/qtube/",
            tools: [ "HTML", "CSS", "JavaScript", "JQuery"],
            desc: "This is a video app for children that will b allowed to watch video just after answer question right.",
            chell: "It was very difficultbu fun"
        },
        {
            id: "4",
            idcontainer: "sf",
            title: "SF Living Wage",
            img: sfLiving,
            github: "#",
            liveview: "https://www.csej.org/",
            tools: [ "WordPress", "Elementor"],
            desc: "This is a film festival websilte that I made while my volonteering with SF Living Wage organisation, personally I made a main page and about page,also Movie list. ",
            chell: "It was very difficultbu fun"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container" id={d.idcontainer}>
                        <div className="item">
                            <ProjectItem 
                                title={d.title}
                                img={d.img}
                                gitHubLink={d.github}
                                liveLink={d.liveview}
                                tools={d.tools}
                                desc={d.desc}>
                            </ProjectItem>
                        </div>
                    </div>
                ))}
            </div>

            <img src={arrow} className="arrow left" alt="" onClick ={() => handleClick("left")}/>
            <img src={arrow} className="arrow right" alt="" onClick ={() => handleClick("rigth")}/>
           
        </div>
    );
}
