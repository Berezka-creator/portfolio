import React from 'react'
import "./Intro.css"
import { init } from 'ityped'
import { useEffect, useRef} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Resume from '../resume/Resume'





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
                    <h3>Freelance <span ref={textRef}></span></h3>
            </div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/julia-berezina/">
                        <img className="icone" src="assets/link.png" alt="" />
                    </a>
                   
                    <a href="https://github.com/Berezka-creator">
                        <img className="icone" src="assets/github.png"  alt=""/>
                    </a>

                    <a href="https://www.facebook.com/yulia.berezina.16">
                        <img className="icone" src="assets/fb.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/julia_b_samara/">
                        <img className="icone inst" src="assets/inst.png"  alt=""/> 
                    </a>   
                </div>

               <div className="buttons">
                   <Link to='/#portfolio'>Portfolio</Link>
                  
                   <Link to={{
                       pathname: '/resume'
                     
                   }}>Resume</Link>
               </div>

                <a href="#portfolio" id="arrow">
                    <img src="assets/down.png" alt="" />
                </a>
      
        </div>
    )
}

