import React from 'react'
import './MenuItem.css'
import { HashLink as Link } from 'react-router-hash-link'


export default function menuItem(props) {
    return (
        <li className="menuItem" >
            <Link
            to={props.link}
            >{props.children}</Link>
        </li>
    )
}
