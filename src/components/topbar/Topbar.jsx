import React from 'react'
import "./Topbar.css"
import {Person, Mail} from "@material-ui/icons"
import { HashLink as Link } from 'react-router-hash-link'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                    <Link to="/portfolio#intro">
                        <div className="logo">b.</div>
                    </Link>

                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span><a href="callto:+14158153134">+1 (415) 815-3134</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="mailto:berezina.y.v.2015@gmail.com">berezina.y.v.2015@gmail.com</a></span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="humburger" onClick ={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
