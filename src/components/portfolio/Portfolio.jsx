import "./Portfolio.css"
import { useEffect, useState } from 'react'
import  {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio
} from "../../data";
import { HashLink as Link } from 'react-router-hash-link'

import burgerApp from '../../images/burger-app.png'
import hostApp from '../../images/host-app.png'
import sfLiving from '../../images/sfliving.png'
import youtubeQuiz from '../../images/youtubeQuiz.png'



export default function Portfolio() {
  
    return (
        <div className="portfolio" id="portfolio">

            <h1>Portfolio</h1>

            <div className="container">

                <Link to='/projectspage#burger'>
                <div className="item">
                    <img src={burgerApp} alt="" />
                    <h3>Burger Builder</h3>
                </div>
            </Link>

                <Link to='/projectspage#host'>      
                <div className="item">
                    <img src={hostApp} alt="" />
                    <h3>Hosting App</h3>
                </div>
            </Link>

                <Link to='/projectspage#youtube'>       
                <div className="item">
                    <img src={youtubeQuiz} alt="" />    
                    <h3>Youtube Quiz</h3>
                </div>
            </Link>

                <Link to='/projectspage#sf'>       
                <div className="item">
                    <img src={sfLiving} alt="" />
                    <h3>WordPress</h3>
                </div>   
            </Link>

            </div>
        </div>
    );
}
