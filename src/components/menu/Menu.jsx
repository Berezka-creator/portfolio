import React from 'react'
import "./Menu.css"
import MenuItems from './menuItems/MenuItems'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className = {"menu " + ( menuOpen && "active")}>
            <MenuItems onClick={() => setMenuOpen(!menuOpen)} />
        </div>
    )
}
