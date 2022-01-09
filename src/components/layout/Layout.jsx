import React, { useState, useEffect } from "react";
import { Route, Switch, Router, Redirect } from 'react-router-dom'
import Topbar from '../topbar/Topbar'
import Menu from '../menu/Menu'
import Sections from '../sections/Sections'
import Resume from '../resume/Resume'
import PdfResume from '../resume/pdf/pdf'
import Projects from '../projectsPage/ProjectsPage'
import "./Layout.css"


export default function Layout() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="layout">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="layout-body">
                <Switch>
                    <Route path="/projects" exact component ={Projects} />
                    <Route path="/resume" exact component ={Resume} />
                    <Route path="/pdfresume" component = {PdfResume} />
                    <Route  path="/" component ={Sections} />
                    <Redirect to ="/" />
                </Switch> 
            </div>
        </div>
    )
};
