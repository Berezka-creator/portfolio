import React from 'react'
import  Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Intro from '../intro/Intro'
import './Sections.css'
import ProjectsPage from '../portfolio/projectsPage/ProjectsPage'


export default function Section() {
    
    return (
        <div className="sections">
                <Intro/>
                <Portfolio />
                <ProjectsPage />
                <Contact /> 
        </div>
    )
}
