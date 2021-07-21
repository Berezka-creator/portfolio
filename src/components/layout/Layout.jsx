import React from 'react'
import { useState } from "react";
import { Route, Switch, Router, Redirect } from 'react-router-dom'
import Intro from '../intro/Intro'
import Topbar from '../topbar/Topbar'
import Menu from '../menu/Menu'
import Sections from '../sections/Sections'
import Resume from '../resume/Resume'


export default function Layout() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="layout">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Switch>
                <Route path="/resume" exact component ={Resume} />
                <Route  path="/" component ={Sections} />
                <Redirect to ="/" />
            </Switch>
        </div>
    )
}
