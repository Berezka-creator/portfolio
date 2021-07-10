import React from 'react'
import './MenuItem.css'


export default function menuItem(props) {
    return (
        <li className="menuItem">
            <a
            href={props.link}
            >{props.children}</a>
        </li>
    )
}
