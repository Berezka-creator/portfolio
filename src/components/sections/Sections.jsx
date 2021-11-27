import React from 'react'
import Slider from '../slider/Slider'
import  Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Intro from '../intro/Intro'
import './Sections.css'

export default function Section() {
    
    return (
        <div className="sections">
                <Intro/>
                <Portfolio />
                <Slider />
                <Contact /> 
        </div>
    )
}
