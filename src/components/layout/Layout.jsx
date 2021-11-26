import React, { useState, useEffect } from "react";
import { Route, Switch, Router, Redirect } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Intro from '../intro/Intro'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Topbar from '../topbar/Topbar'
import Menu from '../menu/Menu'
import Sections from '../sections/Sections'
import Resume from '../resume/Resume'
import PdfResume from '../resume/pdf/pdf'
import ProjectsOverview from '../projectsOverview/ProjectsOverview'
import "./Layout.css"
import { Check } from "@material-ui/icons";


export default function Layout() {
  

    const [scrollEvent, setScrollEvent] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const listenScrollEvent = () => {
      
        console.log("scroll");
        window.scrollY > 100
        ? setScrollEvent(true)
        : setScrollEvent(false)

    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    });

    return (
        <div className="layout">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="layout-body">
                <Switch>
                    <Route path="/resume" exact component ={Resume} />
                    <Route path="/pdfresume" component = {PdfResume} />
                    <Route path="/projectsoverview" component ={ProjectsOverview} />
                    <Route  path="/" component ={Sections} />
                    <Redirect to ="/" />
                </Switch> 
            </div>
            <a href="#intro" className={"top-link " + (scrollEvent && " show-link")}>
                    <FontAwesomeIcon icon={faArrowUp} />
               </a>
          
        </div>
    )
};
