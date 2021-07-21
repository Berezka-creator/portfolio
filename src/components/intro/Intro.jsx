import React from 'react'
import "./Intro.css"
import { init } from 'ityped'
import { useEffect, useRef} from 'react'
import  { Link } from 'react-router-dom'
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
            strings: ["Developer", "Designer", "Content Creator"]

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
                    <a href="#">
                        <img className="icone" src="assets/link.png" alt="" />
                    </a>
                   
                    <a href="#">
                        <img className="icone" src="assets/github.png"  alt=""/>
                    </a>

                    <a href="#">
                        <img className="icone" src="assets/fb.png" alt="" />
                    </a>
                    <a href="#">
                        <img className="icone inst" src="assets/inst.png"  alt=""/> 
                    </a>   
                </div>

               <div className="buttons">
                   <Link to="#portfolio">Portfolio</Link>
                  
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

