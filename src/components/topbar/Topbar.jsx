import React from 'react'
import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">berezka.</a>
                    <div className="itemContainer">
                        {/* <Person className="icon"/> */}
                        <span>+1 415 813 0678</span>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <span>berezka@mail.com</span>
                    </div>
                </div>
                <h1>Hello</h1>

                <div className="right">This is right</div>
            </div>
        
            
        </div>
    )
}
