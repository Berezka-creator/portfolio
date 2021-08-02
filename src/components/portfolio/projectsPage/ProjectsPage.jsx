import { useState } from 'react'
import './ProjectsPage.css'
import ProjectItem from './project/BurgerProject'

export default function ProjectsPage() {

    const data = [
        {
            id: "1",
            title: "Burger Builder",
            img: "assets/burger-app.png",
            github: "https://github.com/Berezka-creator/burger-app",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "JavaScript","ReactJS"],
            
            desc: ";sjdhfksdjhf kjhkhghg ,jsfkd jagdfk.sdh efk idfjs.djh",
            chell: "It was very difficultbu fun"
        },
        {
            id: "2",
            title: "Hosting App",
            img: "assets/host-app.png",
            github: "https://github.com/Berezka-creator/burger-app",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "JavaScript","ReactJS"],
            
            desc: ";sjdhfksdjhf kjhkhghg ,jsfkd jagdfk.sdh efk idfjs.djh",
            chell: "It was very difficultbu fun"
        },
        {
            id: "3",
            title: "Youtube Quiz",
            img: "assets/youtubeQuiz.png",
            github: "https://github.com/Berezka-creator/burger-app",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "JavaScript","ReactJS"],
            
            desc: ";sjdhfksdjhf kjhkhghg ,jsfkd jagdfk.sdh efk idfjs.djh",
            chell: "It was very difficultbu fun"
        }


    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

  
   
    return (
        <div className="projects">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <ProjectItem 
                        title={d.title}
                        img={d.img}
                        gitHubLink={d.github}
                        liveLink={d.liveview}
                        tools={d.tools}
                        desc={d.desc}>
                  </ProjectItem>

                ))
            }
        
        </div>
                 
         

           <img src="assets/arrow.png" className="arrow left" alt="" onClick ={() => handleClick("left")}/>
          
           <img src="assets/arrow.png" className="arrow right" alt="" onClick ={() => handleClick("rigth")}/>
           
        </div>
    );
}
