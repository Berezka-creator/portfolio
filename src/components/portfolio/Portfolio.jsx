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
import foodApp from '../../images/food-app.png'
import samara from '../../images/samara.png'



export default function Portfolio() {
  
    return (
        <div className="portfolio" id="portfolio">

            <h1>Portfolio</h1>

            <div className="container">

                <Link to='/projectspage#burger'>
                <div className="item">
                    <img src={burgerApp} alt="Burger Builder Web Application" />
                    <h3>React Burger Builder</h3>
                </div>
            </Link>

            <Link to='#'>
                <div className="item">
                    <img src={foodApp} alt="Restarant Web Application" />
                    <h3>React Restaurant App <br/><span>(description is in a process)</span></h3>
                </div>
            </Link>

                <Link to='/projectspage#host'>      
                <div className="item">
                    <img src={hostApp} alt="Hosting Website" />
                    <h3>HTML/CSS Hosting Website</h3>
                </div>
            </Link>

                <Link to='/projectspage#youtube'>       
                <div className="item">
                    <img src={youtubeQuiz} alt="Youtube API Application" />
                    <h3>Youtube API Application with Quiz</h3>
                </div>
            </Link>

                <Link to='/projectspage#sf'>       
                <div className="item">
                    <img src={sfLiving} alt="Film Festival" />
                    <h3>WordPress Film Festival</h3>
                </div>   
            </Link>

            <Link to='/projectspage#samara'>       
                <div className="item">
                    <img src={samara} alt="Samara" />
                    <h3>WordPress Samara Group</h3>
                </div>   
            </Link>



            </div>
        </div>
    );
}
