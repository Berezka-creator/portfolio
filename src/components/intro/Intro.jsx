import React from 'react'
import "./Intro.css"
import { init } from 'ityped'
import { useEffect, useRef} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Resume from '../resume/Resume'
import arrowDown from './images/down.png'
import LinkedInIcon from './images/link.png'
import fbIcon from './images/fb.png'
import GitHubIcon from './images/github.png'
import instIcon from './images/inst.png'





export default function Intro() {

    //for class component we will use componentdidMount, but for functional component we use reack hooks useEffect
    //useRef works as a queryselector 
    const textRef = useRef();
    
    useEffect(() => {
        init( textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 50,
            showCursor: true,
            strings: ["Front End Developer"]

        })
     


    },[])

    return (
        <div className="intro" id="intro">
            <div className="imgContainer">
            </div>
          
            <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Julia Berezina</h1>
                    <h3><span ref={textRef}></span></h3>
            </div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/julia-berezina/" target="_blank">
                        <img className="icone" src={LinkedInIcon} alt="" />
                    </a>
                   
                    <a href="https://github.com/Berezka-creator"  target="_blank">
                        <img className="icone" src={GitHubIcon}  alt=""/>
                    </a>

                    <a href="https://www.facebook.com/yulia.berezina.16"  target="_blank">
                        <img className="icone" src={fbIcon} alt="" />
                    </a>
                    <a href="https://www.instagram.com/julia_b_samara/"  target="_blank">
                        <img className="icone inst" src={instIcon}  alt=""/> 
                    </a>   
                </div>

               <div className="buttons">
                   <Link to='/#portfolio'>Portfolio</Link>
                  
                   <Link to={{
                       pathname: '/resume'
                     
                   }}>Resume</Link>
               </div>

                <a href="#portfolio" id="arrow">
                    <img src={arrowDown} alt="" />
                </a>
      
        </div>
    )
}

