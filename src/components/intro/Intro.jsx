import React from 'react'
import "./Intro.css"
import { init } from 'ityped'
import { useEffect, useRef} from 'react'



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
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Julia Berezina</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

