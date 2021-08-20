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
                <div className="item">
                    <Link to='/projectspage#burger'>
                        <img src={burgerApp} alt="" />
                    </Link>
                    <h3>Burger Builder</h3>
                </div>
                   
                    <div className="item">
                        <Link to='/projectspage#host'>
                            <img src={hostApp} alt="" />
                        </Link>
                        <h3>Hosting App</h3>
                    </div>
                    <div className="item">
                        <Link to='/projectspage#youtube'>
                            <img src={youtubeQuiz} alt="" />    
                        </Link>
                        <h3>Youtube Quiz</h3>
                    </div>

                    <div className="item">
                        <Link to='/projectspage#sf'>
                            <img src={sfLiving} alt="" />
                        </Link>
                        <h3>WordPress</h3>
                    </div>       
            </div>

        </div>
    
    );
}
