import React from 'react'
import "./Topbar.css"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">berezka.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 415 813 0678</span>active
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>berezka@mail.com</span>
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
