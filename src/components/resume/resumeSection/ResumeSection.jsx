import React from 'react'
import './ResumeSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ResumeSection(props) {
    return (
        <div className = {props.class}>
            <div className="resume-section-title">
                <FontAwesomeIcon icon={props.icon} className="icon" />
                <h5>{props.title}</h5>
            </div>
            <div className="resume-section__paragraph">{props.children}</div>
        </div>
    )
}
