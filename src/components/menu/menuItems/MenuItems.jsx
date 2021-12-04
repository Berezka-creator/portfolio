import React from 'react'
import MenuItem from './menuItem/MenuItem'
import "./MenuItems.css"

export default function menuItems(props) {
    return (
            <ul className="menuItems">
                <MenuItem link="/#intro">Intro</MenuItem>
                <MenuItem link="/#portfolio">Portfolio</MenuItem>

                <MenuItem link="/#contact">Contact</MenuItem>
            </ul>
     
    )
}
