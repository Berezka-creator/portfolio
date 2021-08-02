import "./Portfolio.css"
import { useEffect, useState } from 'react'
import  {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio
} from "../../data";
import { HashLink as Link } from 'react-router-hash-link'



export default function Portfolio() {

  
    return (
        <div className="portfolio" id="portfolio">

            
            <h1>Portfolio</h1>
           

            <div className="container">
                <div className="item">
                    <Link to='/projectspage#burger'>
                        <img src="assets/burger-app.png" alt="" />
                    </Link>
                    <h3>Burger Builder</h3>
                </div>
                   
                    <div className="item">
                        <Link to='/projectspage#host'>
                            <img src="assets/host-app.png" alt="" />
                        </Link>
                        <h3>Hosting App</h3>
                    </div>

                    <div className="item">
                        <Link to='/projectspage#youtube'>
                            <img src="assets/youtubeQuiz.png" alt="" />    
                        </Link>
                        <h3>Youtube Quiz</h3>
                    </div>

                    <div className="item">
                        <Link to='/projectspage#sf'>
                            <img src="assets/sfliving.png" alt="" />
                        </Link>
                        <h3>WordPress</h3>
                    </div>       
            </div>

        </div>
    
    );
}
